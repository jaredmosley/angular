import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { RARBGSearchResults, RARBGToken, RARBGTorrent } from './rarbg';

@Injectable()
export class RarbgService {

  private rarbgUrl = 'http://localhost:1337/torrentapi.org/pubapi_v2.php';
  private session = {'token': '', 'timestamp': 0};

  torrents$: Observable<RARBGTorrent[]>;
  private torrentsSubject: Subject<any> = new Subject();

  constructor(private http: HttpClient) {
    if (Date.now() - this.session['timestamp'] > 600) {
      this.updateSession().
        subscribe(
          res => {
            this.session['token'] = res.token;
          }
        );
    }

    this.torrents$ = this.torrentsSubject.asObservable();
  }

  search (id: string): void { // Observable<RARBGSearchResults> {
    // check that the token isnt expired
    if (Date.now() - this.session['timestamp'] > 600) {
      this.updateSession().
        subscribe(
          res => {
            this.session['token'] = res.token;
          }
        );
    }

    // log the state of the token
    console.log(`token after update: ${this.session['token']} \n Current Time: ${Date.now()} | Timestamp: ${this.session['timestamp']}`);

    // return the search results
    this.http.get<RARBGSearchResults>(
      this.rarbgUrl,
      {params: {'mode': 'search', 'search_imdb': `${id}`, 'token': `${this.session['token']}`}}).
      subscribe(results => {
        this.torrentsSubject.next(results.torrent_results);
      }
    );
      /*
      pipe(
        tap(results => this.log(`search found: ${id}`)),
        catchError(this.handleError<RARBGSearchResults>(`search: token=${this.session['token']} and id=${id}`))
      );
    */
  }

  private updateSession(): Observable<RARBGToken> {
    if (this.session['token']) {
      this.session['timestamp'] = Date.now();
    }

    return this.http.get<RARBGToken>(this.rarbgUrl, {params: {'get_token': 'get_token'}});
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
