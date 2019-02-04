import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers: [ AuthenticationService ]
})
export class LogInComponent {
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService, private router: Router) {
    this.authService.user.subscribe(user =>  {
      if (user == null) {
        this.isLoggedIn = false;
        // this.router.navigate(['public']);
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.router.navigate([]);
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

//   Get the modal
//   let modal = document.getElementById('id01');
//
// When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
