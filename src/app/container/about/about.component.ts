import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data = [
    {
      title: 'FOR BUSINESS',
      detail: [
        'Technology Support',
        'Business Strategy',
        'Search Engine Optimization',
        'Social Media Marketing',
        'Business Consulting',
      ]
    },
    {
      title: 'FOR ENTREPRENEURS',
      detail: [
        'Idea Investment',
        'Technology Support',
        'Strategy',
        'Consulting'
      ]
    },
    {
      title: 'FOR STUDENTS',
      detail: [
        'Internships',
        'Tech Exposure',
        'IT Consulting',
        'Idea Suppport',
        'Gathering & Seminars',
      ]
    },
    {
      title: 'FOR COMPANIES',
      detail: [
        'Company Management',
        'Technology Support',
        'Application Services',
        'IT Consulting'
      ]
    },
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
