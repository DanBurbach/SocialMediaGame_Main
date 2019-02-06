import { Component } from '@angular/core';
import { BoardService } from '../board.service';
import { Board } from '../board';

const BOARD_SIZE: number = 6;

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css'],
  providers: [BoardService]
})

export class PrivateComponent {
  title = 'app';
    constructor( private boardService: BoardService){}


    createBoards() : PrivateComponent {
         this.boardService.createBoard(BOARD_SIZE);
       return this;
     }


  }
