import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Omdb } from './omdb';

@Injectable()
export class OmdbService {

  private omdbUrl = 'http://www.omdbapi.com/?apikey=c5909197&';

  constructor(private http: HttpClient) { }

  getMovie (id: string): Observable<Omdb> {
    return this.http.get<Omdb>(`${this.omdbUrl}i=${id}`).
      pipe(
        tap(movie => this.log(`found: ${movie.Title}`)),
        catchError(this.handleError<Omdb>(`getMovie id=${id}`))
      );
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
