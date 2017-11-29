import {Injectable} from '@angular/core';
import {AngularFireDatabase} from'angularfire2/database';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PlacesService {
    places:any = [
        {id: 1, plan: 'pagado', closeness: 1, distance: 1, active: true, name: 'Florería la Gardenia', desc: 'Descripcion de este negocio. Mas adelante tendremos mas informacion.'},
        {id: 2, plan: 'gratuito', closeness: 1, distance: 1, active: true, name: 'Donas la pasadita'},
        {id: 3, plan: 'gratuito', closeness: 2, distance: 2, active: true, name: 'Veterinaria Huellitas Felices', desc: 'Descripcion de este negocio. Mas adelante tendremos mas informacion.'},
        {id: 4, plan: 'gratuito', closeness: 3, distance: 3, active: false, name: 'Sushi Suhiroll', desc: 'Descripcion de este negocio. Mas adelante tendremos mas informacion.'},
        {id: 5, plan: 'pagado', closeness: 3, distance: 3, active: true, name: 'Hotel la Gracia', desc: 'Descripcion de este negocio. Mas adelante tendremos mas informacion.'},
        {id: 6, plan: 'gratuito', closeness: 3, distance: 3, active: false, name: 'Zapatería el Clavo', desc: 'Descripcion de este negocio. Mas adelante tendremos mas informacion.'},
    ];

    constructor(private afDB: AngularFireDatabase, private http: HttpClient) {}

    public getPlaces() {
        return this.afDB.list('places/');
    }

    public serachPlace(id) {
        return this.places.find((place) => place.id === id ) || null;
    }

    public savePlace(place) {
        this.afDB.database.ref(`places/${place.id}`).set(place);
    }

    public getGeoData(address) {
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + address);
    }
}
