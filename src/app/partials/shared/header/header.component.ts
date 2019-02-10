import { Component, OnInit } from '@angular/core';
import { AppService } from "../../../services/app.service";
import { Router } from '@angular/router'
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public appService: AppService, private route: Router) { }

  ngOnInit() {}

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
