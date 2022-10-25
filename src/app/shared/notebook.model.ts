import { NoteModel } from './note.model';

export class NotebookModel {
  constructor(public id: number, public title: string, public notes: NoteModel[] = []) {
  }
}
