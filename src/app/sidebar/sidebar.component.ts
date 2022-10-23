import { Component, OnInit } from '@angular/core';
import { NotebookModel }     from '../shared/notebook.model';
import { NoteModel }         from '../shared/note.model';

@Component({
  selector:    'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls:   ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;
  notebooks: NotebookModel[] = [
    new NotebookModel(1, 'EXAMPLE', [
      new NoteModel(1, 'example note', 'siema siema'),
      new NoteModel(2, 'dupa', 'siema siema')]),
    new NotebookModel(2, 'pojeb', [
      new NoteModel(1, 'example note here', 'kolega obok'),
      new NoteModel(2, 'hasta la vista', 'z fartem')]),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  notesCount(): number {
    let sum = 0;
    for (let notebook of this.notebooks) {
      sum += notebook.notes.length;
    }
    return sum;
  }

}
