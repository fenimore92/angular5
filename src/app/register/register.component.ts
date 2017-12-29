import { Component } from '@angular/core';
import {AuthorizationService} from '../services/authorization.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    record: any = {
        email: '',
        password: ''
    };

    constructor(private authorizationService: AuthorizationService) {}

    register() {
        this.authorizationService.register(this.record.email, this.record.password);
    }
}
