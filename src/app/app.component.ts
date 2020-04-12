import { AuthService } from './shared/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-meanstack-authentication';

  constructor(public auth: AuthService) {}

  logout() {
    this.auth.doLogout();
  }
}
