import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  logIn(email: string, password: string) {
    this.authService.logInWithEmailAndPassword(email, password);
  }

  logInWithGoogle() {
    this.authService.logInWithGoogleProvider();
  }
}
