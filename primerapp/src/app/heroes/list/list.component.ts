import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  public heroesNames: string[] = ['Spiderman', 'Ironman','Hulk','Thor','She Hulk'];
  public deleteHeroe?:string;


  removeLastHeroe():void{
   this.deleteHeroe = this.heroesNames.pop()
    console.log(this.deleteHeroe)
  }

}
