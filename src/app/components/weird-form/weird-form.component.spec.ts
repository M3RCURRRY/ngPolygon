import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeirdFormComponent } from './weird-form.component';

describe('WeirdFormComponent', () => {
  let component: WeirdFormComponent;
  let fixture: ComponentFixture<WeirdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeirdFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeirdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
