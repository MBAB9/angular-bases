import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="ResetCounter()">Reset</button>
  <button (click)="increaseBy(0)">-1</button>
  `
})

export class CounterComponent {
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  increaseBy(value:number):void{
    if (value == 1)
       this.counter += 1;
    else if (value == 0)
       this.counter -= 1;
  }

  ResetCounter():void{
          this.counter = 10;
  }

}
