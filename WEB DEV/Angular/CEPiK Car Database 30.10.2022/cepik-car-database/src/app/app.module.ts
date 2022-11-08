import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WojewodztwoComponent } from './pages/wojewodztwo/wojewodztwo.component';
import { PojazdComponent } from './pages/pojazd/pojazd.component';

@NgModule({
  declarations: [
    AppComponent,
    WojewodztwoComponent,
    PojazdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
