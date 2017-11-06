import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { MessageWarningComponent } from './message-warning/message-warning.component';
import { MessageSuccessComponent } from './message-success/message-success.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageSuccessComponent,
    MessageWarningComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
