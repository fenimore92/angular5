import {Component} from '@angular/core';
import {PlacesService} from '../services/places.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html',
    animations: [
        trigger('contenedorAnimable',[
            state('inicial', style({
                opacity: 0
            })),
            state('final', style({
                opacity: 1
            })),
            transition('inicial => final', animate(2000)),
            transition('final => inicial', animate(1000))
        ])
    ]
})
export class PlacesComponent {
    title = 'PlatziSquare';
    state = 'inicial';
    lat:number = 3.4214482;
    lng:number = -76.4944427;
    places = null;
    msgError:string = '';
    constructor(private placesService: PlacesService) {
        this.placesService.getPlaces()
            .valueChanges()
            .subscribe(places => {
                let self = this;
                this.places = places;
                this.places = Object.keys(self.places).map(function (key) { return self.places[key]; });
                this.state = 'final';
            }, error => {
                console.log('error', error);
                this.msgError = error.statusText;
            });
        /*this.placesService.getPlaces()
            .subscribe(places => {
                let self = this;
                this.places = places;
                this.places = Object.keys(self.places).map(function (key) { return self.places[key]; });
                this.state = 'final';
            }, error => {
                console.log('error', error);
                this.msgError = error.statusText;
            });*/
    }

    animar() {
        this.state = (this.state === 'final') ? 'inicial' : 'final';
    }

    animacionInicia(e) {
        console.log('Inicia', e);
    }

    animacionTermina(e) {
        console.log('Termina', e);
    }
}
