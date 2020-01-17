import { Component, OnInit } from '@angular/core';
import { MenteeListItem } from '../models/mentee-list-item.model';

@Component({
  selector: 'app-mentee-list',
  templateUrl: './mentee-list.component.html',
  styleUrls: ['./mentee-list.component.scss']
})
export class MenteeListComponent implements OnInit {

  mentees: MenteeListItem[];
  constructor() { }

  ngOnInit() {
    this.mentees = [{
      name: 'Aditya',
      imagePath: '',
      lastSeen: '12-01-2020',
      description: 'some description',
      courses: ['Javascript', 'Angular']
    },
    {
      name: 'Sridhar',
      imagePath: '',
      lastSeen: '12-01-2020',
      description: 'some description',
      courses: ['Javascript', 'Angular']
    },
    {
      name: 'Praveen',
      imagePath: '',
      lastSeen: '12-01-2020',
      description: 'some description',
      courses: ['Javascript', 'Angular']
    }];
  }

}
