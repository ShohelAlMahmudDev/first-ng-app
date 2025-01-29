import { Component, signal } from '@angular/core';
import { GreetingComponent } from "../components/greeting/greeting.component";
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
homeMessage=signal("Hello World from Home");

// call a function on key up 
keyUpHandler(event: KeyboardEvent) {
  console.log(`user typed the ${event.key} key`);
}

}
