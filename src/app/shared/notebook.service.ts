import { EventEmitter, Injectable } from '@angular/core';
import { NotebookModel }            from './notebook.model';
import { NoteService }              from './note.service';

@Injectable({
  providedIn: 'root',
})
export class NotebookService {
  constructor(private noteService: NoteService) {
  }

  toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  onNotebookSelected: EventEmitter<NotebookModel> = new EventEmitter<NotebookModel>();
  private allNotebooks: NotebookModel[] = [
    {id: 1, title: 'EXAMPLE', notes: this.noteService.getNotesWithParentId(1)},
    {id: 2, title: 'pojeb', notes: this.noteService.getNotesWithParentId(2)}
  ];

  getAllNotebooks(): NotebookModel[] {
    return this.allNotebooks.slice();
  }

  // TODO: add error exception if this return undefined
  getNotebook(id: number): NotebookModel | undefined {
    return this.allNotebooks.find(notebook => notebook.id == id);
  }
}
