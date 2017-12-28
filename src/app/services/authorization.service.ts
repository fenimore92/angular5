import {Injectable} from '@angular/core';

@Injectable()
export class AuthorizationService {
    public login = (email, password) => {
        console.log('Metodo de Login');
    }
    public register = (email, password) => {
        console.log('Metodo de Registro');
    }
}