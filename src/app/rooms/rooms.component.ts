import { Component, OnInit } from '@angular/core';
import { RoomList, Rooms } from "./rooms";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hotel Name';
  numberRooms = 10;
  hideRooms = false

  rooms: Rooms = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 3
  }

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Spa room',
      amenities: 'air condition',
      price: 400,
      photos: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      checkingTime: new Date('11-Nov-2020'),
      checkoutTime: new Date('12-Nov-2020')
    },
    {
      roomNumber: 2,
      roomType: 'Spa room',
      amenities: 'air condition',
      price: 400,
      photos: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      checkingTime: new Date('11-Nov-2020'),
      checkoutTime: new Date('12-Nov-2020')
    },
    {
      roomNumber: 3,

      roomType: 'Spa room',
      amenities: 'air condition',
      price: 400,
      photos: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      checkingTime: new Date('11-Nov-2020'),
      checkoutTime: new Date('12-Nov-2020')
    },
    {
      roomNumber: 4,
      roomType: 'Spa room',
      amenities: 'air condition',
      price: 400,
      photos: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      checkingTime: new Date('11-Nov-2020'),
      checkoutTime: new Date('12-Nov-2020')
    },
    {
      roomNumber: 5,
      roomType: 'Spa room',
      amenities: 'air condition',
      price: 400,
      photos: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      checkingTime: new Date('11-Nov-2020'),
      checkoutTime: new Date('12-Nov-2020')
    },
  ]
  constructor() {
  }
  test() {

  }
  ngOnInit() {

  }

  toggle() {
    this.hideRooms = !this.hideRooms
  }
}
