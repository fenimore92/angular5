import { Component } from '@angular/core';
import {AuthorizationService} from '../services/authorization.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    record: any = {
        email: '',
        password: ''
    };
    constructor(private authorizationService: AuthorizationService) {}

    login() {
        this.authorizationService.login(this.record.email, this.record.password);
    }

    facebookLogin() {
        this.authorizationService.facebookLogin();
    }
}
