import { NoteModel } from './note.model';

export interface NotebookModel {
  id?: number,
  title: string,
  notes: NoteModel[]
  currentNote?: NoteModel;
}
