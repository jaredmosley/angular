import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RarbgService } from './rarbg.service';
import { OmdbService } from './omdb.service';

import { OmdbSearchComponent } from './omdb-search/omdb-search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchComponent } from './search/search.component';
import { TorrentResultsComponent } from './torrent-results/torrent-results.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        OmdbSearchComponent,
        SearchResultsComponent,
        SearchComponent,
        TorrentResultsComponent
      ],
      providers: [
        RarbgService,
        OmdbService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
