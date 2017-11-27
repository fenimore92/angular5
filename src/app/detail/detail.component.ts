import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlacesService} from '../services/places.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html'
})
export class DetailComponent {
    id = null;
    place:any = {};
    constructor(private route: ActivatedRoute, private placesService: PlacesService) {
        console.log(this.route.snapshot.queryParams['action']);
        this.id = Number(this.route.snapshot.params['id']);
        this.place = this.placesService.serachPlace(this.id);
    }
}
