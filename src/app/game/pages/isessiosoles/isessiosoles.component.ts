import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-isessiosoles',
  templateUrl: './isessiosoles.component.html',
  styleUrls: ['./isessiosoles.component.css']
})
export class IsessiosolesComponent implements OnInit {
  jugadr: any;

  //Aquesta funcio crida al servei playerService on tenim la variable jugador per poderla compartir amb els components
  iniciar(){
    this.s.jugadr=this.jugadr;
    this.router.navigate(['/game'])

  }

  constructor(public router: Router,private s: PlayerService) { }

  ngOnInit(): void {
  }

}
