import {Injectable} from '@angular/core';
import {AngularFireDatabase} from'angularfire2/database';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlacesService {
    API_ENDPOINT = 'https://platzisquare-1c46f.firebaseio.com';
    constructor(private afDB: AngularFireDatabase, private http: HttpClient) {}

    public getPlaces() {
        //return this.afDB.list('places/');
        return this.http.get(this.API_ENDPOINT + '/places.json')
            .map((response) => {
                const data = response;
                return data;
            });
    }

    public serachPlace(id) {
        //return this.places.find((place) => place.id === id ) || null;
    }

    public savePlace(place) {
        this.afDB.database.ref(`places/${place.id}`).set(place);
        /*const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post(
            this.API_ENDPOINT + '/places.json',
            place,
            { headers: headers }
        ).subscribe();*/
    }

    public updatePlace(place) {
        this.afDB.database.ref(`places/${place.id}`).set(place);
    }

    public getGeoData(address) {
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + address);
    }

    public getPlace(id) {
        return this.afDB.object(`places/${id}`);
    }
}
