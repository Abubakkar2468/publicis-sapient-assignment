import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexLandingComponent } from './spacex-landing.component';

describe('SpacexLandingComponent', () => {
  let component: SpacexLandingComponent;
  let fixture: ComponentFixture<SpacexLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
