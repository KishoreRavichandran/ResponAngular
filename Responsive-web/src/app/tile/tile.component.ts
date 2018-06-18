import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input('tileinfo') tileForm : TileDes;

  constructor() { }

  ngOnInit() {
  }

}
export interface TileDes{
  imageUrl:string;
  description:string;
  name : string;

}
