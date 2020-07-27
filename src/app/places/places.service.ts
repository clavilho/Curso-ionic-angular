import { Place } from './discover/place.model';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
      149.49
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A roumantic place in Paris!',
      'https://miro.medium.com/max/4096/1*t-nXIcaD3oP6CS4ydXV1xw.jpeg',
      189.49
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://i.pinimg.com/originals/9c/88/44/9c8844b217bdb6c17db14f51ad2e51a5.jpg',
      99.99
    ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}

  getPlace(id: string){
    return {...this._places.find(p=>p.id == id)};
  }
}
