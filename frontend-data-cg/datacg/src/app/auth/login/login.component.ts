import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {AuthService} from '../auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup= this.fb.group({
    'email': ['', [Validators.required, Validators.email ]],
    'senha': ['', [Validators.required]]
    })


  constructor(private authService:AuthService, private fb: FormBuilder,
    private router:Router, private snack:MatSnackBar
    
    ) { }

  ngOnInit() {}


  onSubmit(){
    const cre = this.loginForm.value;
    this.authService.login(cre).subscribe(
      (user)=>{
        console.log(user);
        this.snack.open(
          'Login com sucesso','OK', { duration: 10000 }
        );
        this.router.navigateByUrl('/usuarios')
      },
      (err) =>{
        console.log(err);
        this.snack.open(
          'Falha: dados errados', 'Fail',  { duration: 10000 }
        );
      }





    )
  }
}
