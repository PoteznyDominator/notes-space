import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesPanelComponent } from './notes-panel.component';

describe('NotebookComponent', () => {
  let component: NotesPanelComponent;
  let fixture: ComponentFixture<NotesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotesPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
