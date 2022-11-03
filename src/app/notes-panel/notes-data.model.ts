import { NoteModel } from '../shared/note.model';

export interface NotesDataModel {
  title: string;
  notes: NoteModel[];
}
