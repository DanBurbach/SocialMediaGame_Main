import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from './authentication/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AuthenticationService ]
})
export class AppComponent {
  title = 'Social Media';
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService,
    private router: Router,
  )
    {
      this.authService.user.subscribe(user => {
        if (user == null) {
          this.isLoggedIn = false;
          this.router.navigate(['']);
        } else {
          this.isLoggedIn = true;
          this.userName = user.displayName;
          this.router.navigate(['app-private']);
        }
      });
    }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
