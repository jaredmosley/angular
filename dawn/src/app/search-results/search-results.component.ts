import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subscription } from 'rxjs/Subscription';


import { RarbgService } from '../rarbg.service';
import { OmdbService } from '../omdb.service';

import { OMDBBasicMovie } from '../omdb';
import { RARBGTorrent } from '../rarbg';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  providers: [RarbgService]
})
export class SearchResultsComponent implements OnInit {

  private subscriptions: Subscription = new Subscription();
  results$: Observable<OMDBBasicMovie[]>;

  selectedMovie: string;

  constructor(private omdbService: OmdbService, private rarbgService: RarbgService) {
  }

  ngOnInit() {
    this.subscriptions.add(
      this.omdbService.results$
      .subscribe(
        results => {
          this.results$ = of(results);
        }
      )
    );
    console.log('inited search results');
  }

  getTorrents(id: string): void {
    this.selectedMovie = id;
    console.log(`searching rarbg for: ${id}`);
    this.rarbgService.search(id);
  }
}
