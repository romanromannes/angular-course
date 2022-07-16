import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { ContentAreaComponent } from './components/content-area/content-area.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LeftNavComponent,
    ContentAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
