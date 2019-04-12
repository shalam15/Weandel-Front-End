import { Component, OnInit, OnDestroy, } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgRedux, select } from "@angular-redux/store";
import { ContactActions } from '../../store/actions'
import { IAppState } from "../../store/index";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit, OnDestroy {

  @select() contact
  subscription;
  userData;

  firstname: string
  email: string
  message: string
  form: FormGroup 
  action: ContactActions;

  constructor(private ngRedux: NgRedux<IAppState>, private http: HttpClient) {
    this.form = new FormGroup({
      firstname: new FormControl(),
      email: new FormControl(),
      message: new FormControl()
    })
    this.subscription = ngRedux.select('contact').subscribe(item => this.userData = item)
    this.action = new ContactActions(ngRedux, http)
  }

  ngOnInit() {}

  submit = async () => {
    this.action.postMessage(this.form.value, () => {
      console.log(this.userData)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
