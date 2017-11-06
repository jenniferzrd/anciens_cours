import { Component } from '@angular/core';

@Component({
    selector: 'app-message-success',
    template: `
        <p class="msg">
            {{message}}
        </p>
    `,
    styles: [`
        .msg {
            align-items: center;
            background: #34b61d;
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
export class MessageSuccessComponent {
  message: string = "success message !";
}
