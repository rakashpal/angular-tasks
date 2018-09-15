import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'list';
  constructor() { }

  ngOnInit() {
  }

}
