import { Component, Input, OnInit } from '@angular/core';
import { NoteService }              from '../../shared/note.service';
import { NoteModel }         from '../../shared/note.model';
import { NotebookService }   from '../../shared/notebook.service';

@Component({
  selector:    'app-note',
  templateUrl: './note.component.html',
  styleUrls:   ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input() note: NoteModel |undefined;

  constructor(private noteService: NoteService, private notebookService: NotebookService) {
  }

  ngOnInit(): void {
  }

  getNotebookTitle(): string {
    if (!this.note) {
      return '';
    }

    const notebook = this.notebookService.getNotebook(this.note.parentId);
    return notebook ? notebook.title : '';
  }
}
