import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { ReactiveFormsModule } from '@angular/forms';
//material
import {MaterialModule} from './material.module'
//rotas
import {AppRoutingModule} from './app-routing.module'
import {AuthRoutingModule} from './auth/auth-routing.module'
//componentes
import {UsuariotelaComponent} from './main/usuariotela/usuariotela.component';
import {LoginComponent} from './auth/login/login.component'
import {RegistreComponent} from './auth/registre/registre.component'

import { SlickCarouselModule } from 'ngx-slick-carousel';  



import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [AppComponent,UsuariotelaComponent,LoginComponent,RegistreComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),CommonModule,  BrowserAnimationsModule,HttpClientModule,  ReactiveFormsModule,  MatSnackBarModule, AuthModule, MaterialModule,AppRoutingModule,AuthRoutingModule,SlickCarouselModule] ,
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
