import { Component, OnInit } from '@angular/core';
import{AlbumService} from '../services/album.service';
import {Album }from '../models/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  public albumData:Album[]=new Array();

  constructor(private albumService:AlbumService) { }

  ngOnInit() {
    this.albumService.getAlbum().then(data=>{
   this.albumData=data;
    });
  }

}
