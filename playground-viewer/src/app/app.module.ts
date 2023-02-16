import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { PlaygroundViewerComponent } from './webcomponents/playground-viewer/playground-viewer.component';
import { PlaygroundViewerModule } from './webcomponents/playground-viewer/playground-viewer.module';
@NgModule({
  declarations: [],
  imports: [BrowserModule, PlaygroundViewerModule],
  providers: [],
  entryComponents: [],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const customElement = createCustomElement(PlaygroundViewerComponent, {
      injector: this.injector,
    });
    customElements.define('sgla-playground-viewer', customElement);
  }
}
