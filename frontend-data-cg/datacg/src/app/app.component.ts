import { Component } from '@angular/core';
import {AuthService} from './auth/auth.service'
import { Observable, throwError } from 'rxjs';
import { User } from './main/usuario';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];

  user$: Observable<User>;
  auth$: Observable<boolean>;

  
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
 
  constructor(private authService:AuthService ) {
      this.user$= authService.getUser();
      this.auth$= authService.isAuthenticacao();


  }
}
