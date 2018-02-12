import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { RARBGTorrent } from '../rarbg';
import { Subscription } from 'rxjs/Subscription';
import { RarbgService } from '../rarbg.service';

@Component({
  selector: 'app-torrent-results',
  templateUrl: './torrent-results.component.html',
  styleUrls: ['./torrent-results.component.css'],
  providers: [RarbgService]
})
export class TorrentResultsComponent implements OnInit {

  private subscriptions: Subscription = new Subscription();
  results$: Observable<RARBGTorrent[]>;

  constructor(private rarbgService: RarbgService) { }

  ngOnInit() {
    this.subscriptions.add(
      this.rarbgService.torrents$
      .subscribe(
        torrents => {
          console.log('torrents: ${torrent}');
          this.results$ = of(torrents);
        }
      )
    );
    console.log('inited torrent results');
  }

  download(magnetLink: string): void {
    console.log(`sending request to download: ${magnetLink}`);
  }

}
