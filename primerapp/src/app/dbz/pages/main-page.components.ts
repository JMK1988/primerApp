import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.components.html'
})

export class MainPageComponent  {

constructor(private DbzService: DbzService){}

get characters(): Character[]{
  return [...this.DbzService.characters];
}
onDeleteCharacter(id:string){
  this.DbzService.onDeleteCharacter(id)

}
onNewCharacter(character:Character){
  this.DbzService.onNewCharacter(character)
}
}
