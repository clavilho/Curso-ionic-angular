import { PlacesService } from './../places.service';
import { Place } from './../discover/place.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
loadedPlaces:Place[];
  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces=this.placesService.places;
  }
  onEdit(offerId:string){
    console.log('Editando item', offerId);

  }

}
