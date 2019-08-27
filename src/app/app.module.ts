import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SteamGlobalComponentComponent } from './steam-global-component/steam-global-component.component';
import { GogGlobalComponentComponent } from './gog-global-component/gog-global-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SteamGlobalComponentComponent,
    GogGlobalComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
