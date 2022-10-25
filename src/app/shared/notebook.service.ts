import { EventEmitter, Injectable } from '@angular/core';
import { NotebookModel }            from './notebook.model';
import { NoteService }   from './note.service';

@Injectable({
  providedIn: 'root'
})
export class NotebookService {
  constructor(private noteService: NoteService) {
    for (let notebook of this.allNotebooks) {
      notebook.notes = this.noteService.getNotesWithParentId(notebook.id);
    }
  }

  onNotebookSelected: EventEmitter<NotebookModel> = new EventEmitter<NotebookModel>();
  private allNotebooks: NotebookModel[] = [
    new NotebookModel(1, 'EXAMPLE'),
    new NotebookModel(2, 'pojeb'),
  ]

  getAllNotebooks(): NotebookModel[] {
    return this.allNotebooks.slice();
  }
}
