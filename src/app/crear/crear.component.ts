import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl} from '@angular/forms';
import {PlacesService} from '../services/places.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html'
})
export class CrearComponent {
    place: any = {};
    id: any = null;
    private searchField: FormControl;
    results$: Observable<any>;

    constructor(private placesServices: PlacesService, private route: ActivatedRoute, private  http: HttpClient) {
        this.id = this.route.snapshot.params['id'];
        if (this.id !== 'new') {
            this.placesServices.getPlace(this.id)
                .valueChanges().subscribe( place => {
                    this.place = place;
                });
        }

        const URL = 'https://maps.google.com/maps/api/geocode/json';
        this.searchField = new FormControl();
        this.results$ = this.searchField.valueChanges
            .debounceTime(500)
            .switchMap(query => this.http.get(`${URL}?key=AIzaSyDJ5y3OrNnNOaQESkWVuP8lF0iqt2TzJhk&address=${query}`))
            .map((response) => {
                let responseAny: any = {};
                responseAny = response;
                return responseAny.results;
            });
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

    selectAddress(result) {

        const addressComponents = result.address_components;
        const addressParams: any = {}
        for (let i = 0, len = addressComponents.length; i < len; i++) {
            const type = addressComponents[i].types[0].toString();
            switch (type) {
                case 'street_number':
                    addressParams.street_number = addressComponents[i].long_name;
                    break;
                case 'route':
                    addressParams.route = addressComponents[i].long_name;
                    break;
                case 'locality':
                    addressParams.locality = addressComponents[i].long_name;
                    break;
                case 'country':
                    addressParams.country = addressComponents[i].long_name;
                    break;
            }
        }
        this.place.street = `${addressParams.route} ${addressParams.street_number}`;
        this.place.city = addressParams.locality;
        this.place.country = addressParams.country;
    }
}
