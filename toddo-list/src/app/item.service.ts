import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private addItem = new Subject<string>();
	public addItem$ = this.addItem.asObservable();
  constructor() { }
  public addMessage(message: string){
    if (message) {
      this.addItem.next(message);
    }
  	}
}
