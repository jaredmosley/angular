import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { OmdbSearchComponent } from './omdb-search/omdb-search.component';
import { OmdbService } from './omdb.service';


@NgModule({
  declarations: [
    AppComponent,
    OmdbSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ OmdbService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
