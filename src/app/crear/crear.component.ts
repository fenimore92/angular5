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
        this.place.id = Date.now();
        this.placesServices.savePlace(this.place);
        alert('Negocio guardado!');
        this.place = {};
    }
}
