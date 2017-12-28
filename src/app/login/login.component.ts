import { Component } from '@angular/core';
import {AuthorizationService} from '../services/authorization.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(private authorizationService: AuthorizationService) {
        this.authorizationService.login('email', 'password');
    }
}
