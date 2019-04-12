import { Component, HostListener, OnInit } from '@angular/core';
import { AppService } from "./services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'dev-weandel';
  smallHeader: boolean = false

  @HostListener('scroll', ['$event'])

  scroll = (e) => {
    this.smallHeader = e.srcElement.scrollTop > 100
  }

  constructor(public appService: AppService) {}

  toggleView = () => {
    this.appService.toggleMenu()
  }

  toServices = (target: HTMLElement) => {
    target.scrollIntoView({behavior: "smooth"})
  }
}
