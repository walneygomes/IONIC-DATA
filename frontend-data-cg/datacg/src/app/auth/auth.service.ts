import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import {User} from '.././main/usuario'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = 'http://localhost:42000/'

  private subjectUser: BehaviorSubject<User> = new BehaviorSubject(null);
  private subjectLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private toke: string;
  constructor(private http: HttpClient) { }

  login(cred: {email:string, senha: string}):Observable<User>{
    let loginUrl= this.url + "auth/login"
   
    return this.http.post<User>(loginUrl, cred).pipe(
      tap((u:User)=>{
        localStorage.setItem('token', u.token);
        this.subjectLoggedIn$.next(true);
        this.subjectUser.next(u);
      })
    );
  }



  //registrar usuario no banco de dados mongodb
  //acesso sincrono com o backend
  register(user: User): Observable<User>{
    let registroUrl= this.url + "api/usuario"
 
    return  this.http.post<User>(registroUrl,user);
  }

  //retorna um boolean caso o usuario esteja conectado
  isAuthenticacao(): Observable<boolean>{
    return this.subjectLoggedIn$.asObservable();
  }
  //retorna um objeto, cujo esta conectado
  //precisa passar pela autenticao
  
  getUser(): Observable<User>{

    return this.subjectUser.asObservable();
  }


}
