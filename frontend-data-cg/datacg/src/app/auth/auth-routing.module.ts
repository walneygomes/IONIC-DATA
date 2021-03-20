import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {RegistreComponent} from './registre/registre.component'


const routes: Routes = [
  { path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: RegistreComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
