import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{
  hotelName='Hotel Name';
  numberRooms=10;
constructor() {
}

ngOnInit(){

}
}
