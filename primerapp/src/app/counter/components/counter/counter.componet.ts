import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>contador: {{ counter }}</h3>
    <button (click)="aumentar(1)">aumentar</button>
    <button (click)="aumentar(-1)">disminuir</button>
    <button (click)="reset()">reset1</button> `,
})
export class CounterComponent {
  public counter: number = 10;

  constructor() {}
  aumentar(value: number): void {
    this.counter += value;
  }
  reset() {
    this.counter = 10;
  }
}
