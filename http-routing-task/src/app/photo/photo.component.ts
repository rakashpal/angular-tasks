import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import{AlbumService} from '../services/album.service';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  public albumId:any;
  public albumPhotoData:any;
  constructor(private route:ActivatedRoute,private albumService:AlbumService) {
    route.params.subscribe(params => { this.albumId = params['id']; });
   }

  ngOnInit() {
   
    this.albumService.getAlbumPhoto(this.albumId).then((res:any)=>{
     
      this.albumPhotoData=new Array();
       this.albumPhotoData=res;
       console.log( this.albumPhotoData);
    });
  }

}
