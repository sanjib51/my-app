import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaywordComponent } from './displayword.component';

describe('DisplaywordComponent', () => {
  let component: DisplaywordComponent;
  let fixture: ComponentFixture<DisplaywordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaywordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
