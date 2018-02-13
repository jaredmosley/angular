import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { RarbgService } from './rarbg.service';
import { OmdbService } from './omdb.service';

import { AppComponent } from './app.component';
import { OmdbSearchComponent } from './omdb-search/omdb-search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchComponent } from './search/search.component';
import { TorrentResultsComponent } from './torrent-results/torrent-results.component';
import { DummyComponent } from './dummy/dummy.component';


@NgModule({
  declarations: [
    AppComponent,
    OmdbSearchComponent,
    SearchResultsComponent,
    SearchComponent,
    TorrentResultsComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ HttpClientModule, RarbgService, OmdbService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
