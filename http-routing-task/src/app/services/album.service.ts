import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Album }from '../models/album';
import {Photo} from '../models/photo';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {
   public albumData:Album[]=new Array();
   public albumPhtotData:Photo[]=new Array();
  constructor(private http:HttpClient) { }
  public getAlbum(): Promise <Album[]>{
   return this.http.get('https://jsonplaceholder.typicode.com/albums').toPromise().then((res: any)=>{
     for(let a of res){
       this.albumData.push(new Album(a));
     }
     return this.albumData;
   });
   
  }

  public getAlbumPhoto(albumId:any){
    return this.http.get('https://jsonplaceholder.typicode.com/photos?albumId='+albumId).toPromise().then((res: any)=>{
      this.albumPhtotData=new Array();  
    for(let a of res){
        this.albumPhtotData.push(new Photo(a));
      }
      return this.albumPhtotData;
    });
  }
}
