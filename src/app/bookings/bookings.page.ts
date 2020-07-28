import { Booking } from './booking.model';
import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  loadedBookings: Booking[];
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.loadedBookings = this.bookingService.bookings;
  }
  onCancelBooking(offerId: string, slidingEl: IonItemSliding){

    slidingEl.close();
    //fechar o deslizamento quando for clicado no botão de cancelar
  }

}