import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
@Injectable()
export class AuthorizationService {
    constructor(private angularFireAuth: AngularFireAuth, private router: Router) {}

    public facebookLogin() {
        this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then((result) => {
                alert('Usuario logueado con facebook');
                console.log('result', result);
                this.router.navigate(['places']);
            })
            .catch((error) => {
                console.log('error', error);
            });
    }

    public login = (email, password) => {
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
            .then((response) => {
                alert('Usuario logueado con exito');
                console.log('response success', response);
                this.router.navigate(['places']);
            })
            .catch((error) => {
                alert('Un error ha ocurrido');
                console.log('response error', error);
            });
    }

    public register = (email, password) => {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((response) => {
                alert('Usuario Registrado con exito');
                console.log('response success', response);
            })
            .catch((error) => {
                alert('Un error ha ocurrido');
                console.log('response error', error);
            });
    }

    public isLogged() {
        return this.angularFireAuth.authState;
    }

    public logout() {
        this.angularFireAuth.auth.signOut();
        alert('Sesion cerrada!');
        this.router.navigate(['places']);
    }

    public getEmail() {
        return this.angularFireAuth.auth.currentUser.email;
    }
}