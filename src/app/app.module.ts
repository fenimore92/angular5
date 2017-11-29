import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { PlacesComponent } from './places/places.component';
import { ContactComponent } from './contact/contact.component';
import {PlacesService} from './services/places.service';
import {CrearComponent} from './crear/crear.component';
import {HttpClientModule} from '@angular/common/http';


const appRoutes: Routes = [
    { path: '', component: PlacesComponent },
    { path: 'places', component: PlacesComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'crear', component: CrearComponent }
];

@NgModule({
  declarations: [
    AppComponent,
      ResaltarDirective,
      ContarClicksDirective,
      DetailComponent,
      PlacesComponent,
      ContactComponent,
      CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDf5r7H1MHc_GPfPt2xeguFdvBk6mqHcao'
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [
      PlacesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
