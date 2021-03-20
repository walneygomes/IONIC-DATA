import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//componentes
import {UsuariotelaComponent} from './main/usuariotela/usuariotela.component';



const appRoutes: Routes =[
 
  {path: 'usuarios', component: UsuariotelaComponent }
  //{path: '', pathMatch:'full', redirectTo:'login'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
