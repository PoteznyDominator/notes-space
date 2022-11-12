import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFontComponent } from './text-font.component';

describe('TextFontComponent', () => {
  let component: TextFontComponent;
  let fixture: ComponentFixture<TextFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextFontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
