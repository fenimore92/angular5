import { Component } from '@angular/core';
import {PlacesService} from '../services/places.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html'
})
export class CrearComponent {
    place:any = {};
    id:any = null;
    constructor(private placesServices: PlacesService, private route: ActivatedRoute) {
        this.id = this.route.snapshot.params['id'];
        if (this.id !== 'new') {
            this.placesServices.getPlace(this.id)
                .valueChanges().subscribe( place => {
                    this.place = place;
                });
        }
    }
    savePlace() {
        const address = `${this.place.street},${this.place.city},${this.place.country}`;
        this.placesServices.getGeoData(address)
            .subscribe((result) => {

                this.place.lat =  result['results'][0].geometry.location.lat;
                this.place.lng = result['results'][0].geometry.location.lng;

                if (this.id === 'new') {
                    this.place.id = Date.now();
                    this.placesServices.savePlace(this.place);
                    this.place = {};
                    alert('Negocio guardado!');
                }else {
                    this.placesServices.updatePlace(this.place);
                    alert('Negocio actualizado!');
                }

            });
    }
}
