import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

export const config = {
    apiKey: "YOUR apiKey",
    authDomain: "YOUR authDomain",
    databaseURL: "YOUR databaseURL",
    projectId: "YOUR projectId",
    storageBucket: "YOUR storageBucket",
    messagingSenderId: "YOUR messagingSenderId"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
