import { Component } from '@angular/core';
import {AuthorizationService} from '../services/authorization.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    constructor(private authorizationService: AuthorizationService) {
        this.authorizationService.register('email', 'password');
    }
}
