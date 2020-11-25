import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsHomePageComponent } from './programs-home-page.component';

describe('ProgramsHomePageComponent', () => {
  let component: ProgramsHomePageComponent;
  let fixture: ComponentFixture<ProgramsHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsHomePageComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
