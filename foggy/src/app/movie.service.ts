import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Movie, Movies } from './movie';
import { HttpResponse } from '@angular/common/http/src/response';
import { deserialize } from 'json-typescript-mapper';

@Injectable()
export class MovieService {

  private moviesUrl = 'api/movies'; // URL to web api
  private omdbUrl = 'http://www.omdbapi.com/?apikey=c5909197&';
  private delugeUrl = 'http://host:9091/transmission/rpc';

  constructor(private http: Http) { }

  search(term: string, type: string): Observable<Movie> {
    if (!term.trim()) {
      return of();
    }
    const url = `${this.omdbUrl}${type}${term.replace(/ /g, '+')}`;
    return this.http.get(url)
      .map(this.extractData, Movie)
      .catch(this.handleError);
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get(delugeUrl)
      .map(this.extractData, Movies)
      .catch(this.handleError);
  }

  private extractData(res: Response, obj: any) {
    const body = res.json();
    return deserialize(obj, body);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log('error occured');
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
