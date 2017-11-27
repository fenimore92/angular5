import { Component } from '@angular/core';
import {PlacesService} from '../services/places.service';

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html'
})
export class PlacesComponent {
    title = 'PlatziSquare';
    lat:number = 3.4214482;
    lng:number = -76.4944427;
    places = null;
    constructor(private placesService: PlacesService) {
        placesService.getPlaces()
            .valueChanges()
            .subscribe(places => {
                this.places = places;
            });
    }
}
