import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../auth/auth.service'
import { Observable, pipe } from 'rxjs';
import  {MainService} from '../main.service'
import {User} from '../usuario'
import {UsuarioTElaService} from '../usuario-tela.service'
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-usuariotela',
  templateUrl: './usuariotela.component.html',
  styleUrls: ['./usuariotela.component.scss'],
})
export class UsuariotelaComponent implements OnInit {
  
  user$: Observable<User>;
  auth$: Observable<boolean>;

  items= []
  IMC=0.0;
  images = [  
    { img: "https://www.elhombre.com.br/wp-content/uploads/2014/06/usculacao-sem-arte.jpg" },  
    { img: "https://www.elhombre.com.br/wp-content/uploads/2014/06/usculacao-sem-arte.jpg" },  
    { img: "https://www.elhombre.com.br/wp-content/uploads/2014/06/usculacao-sem-arte.jpg" },  
    { img: "https://www.elhombre.com.br/wp-content/uploads/2014/06/usculacao-sem-arte.jpg" },  
    { img: "https://www.elhombre.com.br/wp-content/uploads/2014/06/usculacao-sem-arte.jpg" },  
    { img: "https://www.elhombre.com.br/wp-content/uploads/2014/06/usculacao-sem-arte.jpg" },  
    { img: "https://www.elhombre.com.br/wp-content/uploads/2014/06/usculacao-sem-arte.jpg" },  
    { img: "https://www.elhombre.com.br/wp-content/uploads/2014/06/usculacao-sem-arte.jpg" },  
    { img: "https://www.elhombre.com.br/wp-content/uploads/2014/06/usculacao-sem-arte.jpg" },  
  ];
  usuarios$: User;
  constructor(private serviceTela:UsuarioTElaService, private authService: AuthService , private serviceMain:MainService) {
    this.user$= authService.getUser();
    this.auth$= authService.isAuthenticacao();
    this.getAll()
    

  }

  

  ngOnInit() {
    this.items =this.getListaInformacao();
  }

  getListaInformacao(){
    return this.serviceTela.getExibirInformacaoMotivacao();
  }

  getAll(){
    return this.serviceMain.getUsuarios().subscribe(
      (data:User)=>{
        this.usuarios$ = data
        console.log(data)
      });
  }
  calcularIMC(altura, peso){

    this.IMC= parseFloat((peso/(altura*altura)).toFixed(2));
    
  }
  calcularClassificacao(){
    if(this.IMC<=18.5){
      return "Sua classificacao: Abaixo do peso"
    }
    else if(this.IMC>18.5 && this.IMC<=24.9){
      return "Sua classificacao: Peso normal";
    }
    else if(this.IMC>24.9 && this.IMC<=29.9){
      return "Sua classificacao: Sobre peso"
    }
    else if(this.IMC>19.9 && this.IMC<34.9){
      return "Sua classificacao: Obesidade grau 1"
    }
    else if( this.IMC> 34.9 && this.IMC<39.9){
      return "Sua classificacao: Obesidade grau 2"
    }
    else{
      return "Sua classificacao: Obesidade grau 3"
    }

  }



}
