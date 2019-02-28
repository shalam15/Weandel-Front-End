import { Component, OnInit, Input } from '@angular/core';
import { AppService } from "../../../services/app.service";
import { Router } from '@angular/router'
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() small: boolean
  
  constructor(public appService: AppService, private route: Router) { }

  ngOnInit() {
    console.log(this.small)
  }

  getRoute = () => {
    if (this.route.url === '/')
      return 'active'
    else
      return 'inactive'  
  }

  toggleMenu = () => {
    this.appService.toggleMenu()
  }

}
