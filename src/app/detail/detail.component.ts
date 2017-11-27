import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html'
})
export class DetailComponent {
    places:any = [
        {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, name: 'Florería la Gardenia', desc: 'Descripcion de este negocio. Mas adelante tendremos mas informacion.'},
        {id: 2, plan: 'gratuito', cercania: 1, distancia: 1, active: true, name: 'Donas la pasadita'},
        {id: 3, plan: 'gratuito', cercania: 2, distancia: 2, active: true, name: 'Veterinaria Huellitas Felices', desc: 'Descripcion de este negocio. Mas adelante tendremos mas informacion.'},
        {id: 4, plan: 'gratuito', cercania: 3, distancia: 3, active: false, name: 'Sushi Suhiroll', desc: 'Descripcion de este negocio. Mas adelante tendremos mas informacion.'},
        {id: 5, plan: 'pagado', cercania: 3, distancia: 3, active: true, name: 'Hotel la Gracia', desc: 'Descripcion de este negocio. Mas adelante tendremos mas informacion.'},
        {id: 6, plan: 'gratuito', cercania: 3, distancia: 3, active: false, name: 'Zapatería el Clavo', desc: 'Descripcion de este negocio. Mas adelante tendremos mas informacion.'},
    ];
    id = null;
    place:any = {};
    constructor(private route: ActivatedRoute) {
        console.log(this.route.snapshot.queryParams['action']);
        this.id = Number(this.route.snapshot.params['id']);
        this.place = this.serachPlace();
    }

    serachPlace() {
        return this.places.find((place) => place.id === this.id ) || null;
    }
}
