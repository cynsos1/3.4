import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userMessage: string = '';
  displayMessage: string = 'Hello World';

  updateMessage() {
    this.displayMessage = this.userMessage || 'Hello from Cynthia Sosa!';
  }
}
