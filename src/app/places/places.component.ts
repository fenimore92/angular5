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
    msgError:string = '';
    constructor(private placesService: PlacesService) {
        this.placesService.getPlaces()
            .subscribe(places => {
                let self = this;
                this.places = places;
                this.places = Object.keys(self.places).map(function (key) { return self.places[key]; });
            }, error => {
                console.log('error', error);
                this.msgError = error.statusText;
            });
    }
}
