import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextJustifyComponent } from './text-justify.component';

describe('TextJustifyComponent', () => {
  let component: TextJustifyComponent;
  let fixture: ComponentFixture<TextJustifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextJustifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextJustifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
