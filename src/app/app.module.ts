import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgramsHomePageComponent } from './components/programs-home-page/programs-home-page.component';
import { ProgramsComponent } from './components/programs/programs.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ProgramsHomePageComponent,
    ProgramsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatCardModule,
  ],
  providers: [],
})
export class AppModule { }
