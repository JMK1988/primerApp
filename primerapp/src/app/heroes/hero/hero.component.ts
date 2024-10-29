import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  public name:string = "ironman";
  public age:number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase()
  }

  getheroDescription():string{
    return `${this.name.toUpperCase()} tiene ${this.age}`
  }

  changeHero():void{
    this.name = "spiderman"
  }
  changeAge():void{
    this.age = 20
  }
  reset():void{
    this.name = 'ironman';
    this.age = 45;
  }
}
