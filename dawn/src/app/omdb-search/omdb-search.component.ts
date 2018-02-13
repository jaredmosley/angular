import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { OmdbService } from '../omdb.service';
import { OMDBSearchResults, OMDBFullMovie, OMDBBasicMovie } from '../omdb';
import { SearchResultsComponent } from '../search-results/search-results.component';

@Component({
  selector: 'app-omdb-search',
  templateUrl: './omdb-search.component.html',
  styleUrls: ['./omdb-search.component.css'],
  providers: [ OmdbService ]
})
export class OmdbSearchComponent implements OnInit {

  constructor(private omdbService: OmdbService) { }

  ngOnInit() {
  }

  getID (id: string): void {
    console.log(`searching omdb by id: ${id}`);
    this.omdbService.get(id, 'i=');
  }

  getTitle (title: string): void {
    console.log(`searching omdb by title: ${title}`);
    this.omdbService.get(title, 't=');
  }

  search (term: string): void {
    console.log(`searching omdb for: ${term}`);
    this.omdbService.search(term);
  }

}
