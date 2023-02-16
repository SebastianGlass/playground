import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundViewerComponent } from './playground-viewer.component';

@NgModule({
  declarations: [PlaygroundViewerComponent],
  imports: [CommonModule],
  exports: [PlaygroundViewerComponent],
})
export class PlaygroundViewerModule {}
