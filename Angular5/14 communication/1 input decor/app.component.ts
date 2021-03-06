import { Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
        <h1>{{title}}!</h1>
        <button (click)="increment()">Increment</button>
        <button (click)="Decrement()">Decrement</button>
        <child-component [count]=Counter></child-component>` ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Interaction';
  Counter = 5;

  increment() {
    this.Counter++;
  }

  Decrement() {
    this.Counter--;
  }

}
