import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subscription } from 'rxjs/Subscription';

import { RarbgService } from '../rarbg.service';

import { RARBGTorrent } from '../rarbg';

@Component({
  selector: 'app-torrent-results',
  templateUrl: './torrent-results.component.html',
  styleUrls: ['./torrent-results.component.css'],
  providers: [ RarbgService ]
})
export class TorrentResultsComponent implements OnInit {

  private subscriptions: Subscription = new Subscription();
  results$: Observable<RARBGTorrent[]>;

  constructor(private rarbgService: RarbgService) { }

  ngOnInit() {
    this.subscriptions.add(
      this.rarbgService.results$
      .subscribe(
        res => {
          console.log('torrents found on init: ${res}');
          this.results$ = of(res);
        }
      )
    );
    console.log('inited torrent results');
  }

  download(magnetLink: string): void {
    console.log(`sending request to download: ${magnetLink}`);
  }

}
