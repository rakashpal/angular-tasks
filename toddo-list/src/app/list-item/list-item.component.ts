import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
   public lists:string[];
   public messagesSub: Subscription;
  constructor(private itemService:ItemService) {
    this.lists=[
      'First',
      'Second',
      'Third',
      'Fourth'
    ];
   }

  ngOnInit() {
    this.subscribeToMessageAdd()
  }
  subscribeToMessageAdd(){
    this.messagesSub = this.itemService.addItem$.subscribe(val => {
      this.lists.push(val);
    });
  }
  removeItem(index){
    this.lists.splice(index,1);
  }
  ngOnDestroy(): void {
    this.messagesSub && this.messagesSub.unsubscribe()
  }
}
