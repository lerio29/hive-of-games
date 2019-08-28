import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { SteamGlobalComponentComponent } from './steam-global-component/steam-global-component.component';
import { GogGlobalComponentComponent } from './gog-global-component/gog-global-component.component';
import { Configuration } from '../assets/config/app.constants';

@NgModule({
  declarations: [
    AppComponent,
    SteamGlobalComponentComponent,
    GogGlobalComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    Configuration
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
