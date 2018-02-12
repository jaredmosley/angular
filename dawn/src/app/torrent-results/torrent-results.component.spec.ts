import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorrentResultsComponent } from './torrent-results.component';

describe('TorrentResultsComponent', () => {
  let component: TorrentResultsComponent;
  let fixture: ComponentFixture<TorrentResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorrentResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorrentResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
