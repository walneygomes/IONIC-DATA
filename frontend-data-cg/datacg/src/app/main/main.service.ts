import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class MainService {
  readonly url = 'http://localhost:42000/api/usuarios'




  constructor(private http: HttpClient) { }
  public getUsuarios(): Observable<any>{
    console.log("")
    return this.http.get(this.url);
  }


}
