import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-playground-viewer',
  templateUrl: './playground-viewer.component.html',
  styleUrls: ['./playground-viewer.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class PlaygroundViewerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
