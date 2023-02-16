import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundViewerComponent } from './playground-viewer.component';

describe('PlaygroundViewerComponent', () => {
  let component: PlaygroundViewerComponent;
  let fixture: ComponentFixture<PlaygroundViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaygroundViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
