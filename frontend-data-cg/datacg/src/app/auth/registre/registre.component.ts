import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service'
@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.scss'],
})
export class RegistreComponent implements OnInit {
  formRegister = this.fb.group({
    'nome': ['', [Validators.required]],
    'email': ['', [Validators.required]],
    'senha': ['', [Validators.required]],
    'senhaConfirmar': ['', [Validators.required]],
    'dataNascimento': ['', [Validators.required]],
    'endereco': ['', [Validators.required]],
    'altura': ['', [Validators.required]],
    'peso': ['', [Validators.required]]
})

  constructor(private fb: FormBuilder,
    private snackBar: MatSnackBar, private router:Router,
    private serviceAuth:AuthService

    
    ) { }

  ngOnInit() {}

  onSubmit(){
    
    if(this.formRegister.value.email != ""){
      if(this.formRegister.value.nome != ""){
        if(this.formRegister.value.altura  != ""){
          if(this.formRegister.value.peso != ""){
            if(this.formRegister.value.senha == this.formRegister.value.senhaConfirmar){
              let user= this.formRegister.value;
              this.serviceAuth.register(user).subscribe(
                (user)=>{
                  this.snackBar.open(
                    'Sucesso no seu cadastro','Ok'
                  , { duration: 5000 })
                  this.router.navigateByUrl('/auth/login');
                },
                (err)=>{
                  if(err){
                  console.log(err);
                  this.snackBar.open(
                    'Falha: email existente', 'Fail',{ duration: 10000 }
                  );}} ,  
              )              
            }else{
              this.snackBar.open(
                'Falha: senhas diferentes'
              )

            }
          }else{
            this.snackBar.open(
              'Falha: informe seu peso'
            )
          }
        }else{
          this.snackBar.open(
            'Falha: informe sua altura'
          )

        }
      
      }else{
        this.snackBar.open(
          'Falha: informe seu nome'
        )
      }
      
    }else{
      this.snackBar.open(
        'Falha: informe seu email'
      );

    } 

  }

}
