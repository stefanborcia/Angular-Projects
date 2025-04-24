import { Component } from '@angular/core';
import {CounterComponent} from './counter/counter.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  counter: number = 5;

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

}
