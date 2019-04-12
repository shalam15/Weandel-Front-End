import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data = [
    {
      title: 'FOR STUDENTS',
      detail: [
        'Resume Generation',
        'Portfolio Management',
        'College Networking',
        'Company networking'
      ]
    },
    {
      title: 'FOR COLLEGE',
      detail: [
        'Publish News and Events',
        'Digital Library',
        'College overall stats',
        'Performance analysis'
      ]
    },
    {
      title: 'FOR COMPANIES',
      detail: [
        'HR Management',
        'Seach projects, members',
        'Post custom jobs',
        'Genuine resume access'
      ]
    },
    {
      title: 'FOR BUSINESS',
      detail: [
        'Staff Management',
        'Product Portfolio',
        'Customer Subscribers',
        'Local listing'
      ]
    }
  ]

  visions = [
    {
      title: 'Connect',
      description: 'Connecting people with the similar interest in work, passion and interest.'
    },
    {
      title: 'Source',
      description: 'Help people to source the right candidate or resource to meet their needs.'
    },
    {
      title: 'Passion',
      description: 'Help users to focus on their passion and help them to achieve the best.'
    },
    {
      title: 'Build',
      description: 'Build a world where we solve world problem and the world will solve ours'
    },
  ]

  @ViewChild('top') top

  constructor() { }

  ngOnInit() {
    document.getElementById('upp').scrollIntoView({behavior: 'smooth'})
  }

}
