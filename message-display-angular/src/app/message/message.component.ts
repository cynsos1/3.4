import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  message: string = '';
  displayedMessage: string = 'Hello World';

  displayMessage() {
    this.displayedMessage = this.message;
  }
}
