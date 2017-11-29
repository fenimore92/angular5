import { Component } from '@angular/core';
import {PlacesService} from '../services/places.service';

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html'
})
export class CrearComponent {
    place:any = {};
    constructor(private placesServices: PlacesService) {

    }
    savePlace() {
        const address = `${this.place.street},${this.place.city},${this.place.country}`;
        this.placesServices.getGeoData(address)
            .subscribe((result) => {
                this.place.id = Date.now();
                this.place.lat =  result['results'][0].geometry.location.lat;
                this.place.lng = result['results'][0].geometry.location.lng;
                this.placesServices.savePlace(this.place);
                alert('Negocio guardado!');
                this.place = {};
            });
    }
}
