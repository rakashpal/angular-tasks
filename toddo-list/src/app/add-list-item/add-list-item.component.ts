import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
@Component({
  selector: 'app-add-list-item',
  templateUrl: './add-list-item.component.html',
  styleUrls: ['./add-list-item.component.css']
})
export class AddListItemComponent implements OnInit {

  constructor(private itemService:ItemService) { }

  ngOnInit() {
  }
  addItem(item:HTMLInputElement){
    this.itemService.addMessage(item.value);
    item.value='';
  }
}
