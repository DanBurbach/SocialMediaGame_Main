import { Component } from '@angular/core';
import { BoardService } from '../board.service';
import { Board } from '../board';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

const BOARD_SIZE: number = 6;

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css'],
  providers: [BoardService, AuthenticationService]
})

export class PrivateComponent {
  title = 'app';
  private isLoggedIn: Boolean;
  private userName: String;
  user;
    constructor( private boardService: BoardService, public authService: AuthenticationService,
      private router: Router){
        this.authService.user.subscribe(user => {
          if (user == null) {
            this.isLoggedIn = false;
            this.router.navigate([]);
          } else {
            this.isLoggedIn = true;
            this.userName = user.displayName;
            this.router.navigate(['app-private']);
          }
        });
      }


    createBoards() : PrivateComponent {
         this.boardService.createBoard(BOARD_SIZE);
       return this;
     }

     logout() {
       this.authService.logout();
     }
  }
