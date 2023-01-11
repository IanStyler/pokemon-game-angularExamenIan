import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { MaterialModule } from '../material/material.module';

import { GameComponent } from './pages/game/game.component';
import { GameoverComponent } from './pages/gameover/gameover.component';
import { PokemonViewComponent } from './components/pokemon-view/pokemon-view.component';
import {FormsModule} from "@angular/forms";
import { IsessiosolesComponent } from './pages/isessiosoles/isessiosoles.component';



@NgModule({
  declarations: [
    GameComponent,
    GameoverComponent,
    PokemonViewComponent,
    IsessiosolesComponent
  ],
    imports: [
        CommonModule,
        GameRoutingModule,
        MaterialModule,
        FormsModule
    ]
})
export class GameModule { }
