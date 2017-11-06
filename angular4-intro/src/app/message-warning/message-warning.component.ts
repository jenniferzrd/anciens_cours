import { Component } from '@angular/core';

@Component({
  selector: 'app-message-warning',
  template: `
      <p class="msg">
        <span>{{message}}</span>
      </p>
  `,
  styles: [`
      .msg {
          align-items: center;
          background: firebrick;
          border-radius: .3rem;
          color: white;
          display: flex;
          height: 32px;
          justify-content: center;
          max-width: 220px;
          padding: 10px;
      }
  `]
})
export class MessageWarningComponent {

  message: string = "warning message !";

}
