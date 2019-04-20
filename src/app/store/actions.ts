import { Component, OnInit, Injectable } from '@angular/core';
import * as actionTypes from './types'
import { NgRedux } from "@angular-redux/store";
import { IAppState } from "./index";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class ContactActions {

  constructor(private ngRedux: NgRedux<IAppState>, private http: HttpClient) {}

  postMessage = (data, callback) => {

    return this.http.post('contact.php', data).subscribe(async res => {
      console.log(res)
      await this.ngRedux.dispatch({
        payload: data,
        type: actionTypes.POST_MESSAGE
      })
      callback()
    }, async error => {
      console.log(error)
      console.log(error.response)
      await this.ngRedux.dispatch({
        payload: data,
        type: actionTypes.POST_MESSAGE
      })
      callback()
    })
  }

  // ngOnInit() {}
}