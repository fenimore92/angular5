import { Component } from '@angular/core';

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html'
})
export class PlacesComponent {
    title = 'PlatziSquare';
    places:any = [
        {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, name: 'Florería la Gardenia'},
        {id: 2, plan: 'gratuito', cercania: 1, distancia: 1, active: true, name: 'Donas la pasadita'},
        {id: 3, plan: 'gratuito', cercania: 2, distancia: 2, active: true, name: 'Veterinaria Huellitas Felices'},
        {id: 4, plan: 'gratuito', cercania: 3, distancia: 3, active: false, name: 'Sushi Suhiroll'},
        {id: 5, plan: 'pagado', cercania: 3, distancia: 3, active: true, name: 'Hotel la Gracia'},
        {id: 6, plan: 'gratuito', cercania: 3, distancia: 3, active: false, name: 'Zapatería el Clavo'},
    ];
    lat:number = 3.4214482;
    lng:number = -76.4944427;

    constructor() {

    }
}
