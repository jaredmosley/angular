import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { OMDBBasicMovie, OMDBSearchResults, OMDBFullMovie } from './omdb';

@Injectable()
export class OmdbService {

  private omdbUrl = 'http://www.omdbapi.com/?apikey=c5909197&';

  results$: Observable<OMDBBasicMovie[]>;
  private resultSubject: Subject<OMDBBasicMovie[]> = new Subject();

  constructor(private http: HttpClient) {
    this.results$ = this.resultSubject.asObservable();
  }

  get (term: string, operation: string): Observable<OMDBFullMovie> {
    return this.http.get<OMDBFullMovie>(`${this.omdbUrl}${operation}${this.clean(term)}`).
      pipe(
        tap(movie => this.log(`found: ${movie.Title}`)),
        catchError(this.handleError<OMDBFullMovie>(`getMovie term=${term}`))
      );
  }

  search (term: string): void {
    if (!term.trim()) { console.log('empty search'); }

    const url = `${this.omdbUrl}s=${this.clean(term)}`;

    this.http.get<OMDBSearchResults>(url).
      subscribe(results => {
        this.resultSubject.next(results.Search);
      }
    );

    /*
      pipe(
        tap(results => this.log(`found ${results.totalResults} movies`)),
        catchError(this.handleError<OMDBSearchResults>(`search: ${url}`))
      );
      */
  }

  private clean (term: string): string {
    return term.replace(/ /g, '+');
  }

  // operation has default option of 'operation' and ? means optional
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // log the error to console
      console.error(error);

      // log the error to console with context
      this.log(`${operation} failed: ${error.message}`);

      // let the app keep running with an empty result
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
