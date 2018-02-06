import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { OmdbService } from '../omdb.service';
import { Omdb } from '../omdb';

@Component({
  selector: 'app-omdb-search',
  templateUrl: './omdb-search.component.html',
  styleUrls: ['./omdb-search.component.css']
})
export class OmdbSearchComponent implements OnInit {
  movie$: Observable<Omdb>;

  constructor(
    private omdbService: OmdbService
  ) { }

  ngOnInit() {
  }

  getMovie(id: string): void {
    console.log('getting movie');
    this.movie$ = this.omdbService.getMovie(id);
    console.log('received movie');
  }

}
