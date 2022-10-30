import { EventEmitter, Injectable } from '@angular/core';
import { NoteModel }                from './note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor() {
  }

  private allNotes: NoteModel[] = [
    {
      parentId: 1, id: 1, title: 'example note here to use', desc: 'patatatata tatat ' +
                                                                   'dasdasdasdasda sdasddddada' +
                                                                   ' dasdwdaeadaaaaaaa adadasdas',
      imageUrl: 'https://picsum.photos/400/400', date: new Date(),
    },
    {
      parentId: 1, id: 2, title: 'dupa blada olelela adasdas', desc: 'patatatata tatat dasda' +
                                                                     ' eadasd' +
                                                                     'dasdasdasdasda sdasddddada dasdwdaeadaaaaaaa adadasda',
      date:     new Date(),
    },
    {
      parentId: 2, id: 3, title: 'example note here', desc: 'kolega obok',
      imageUrl: 'https://picsum.photos/400/500', date: new Date(),
    },
    {
      parentId: 2, id: 4, title: 'hasta la vista', desc: 'z fartem',
      imageUrl: 'https://picsum.photos/200/300', date: new Date(),
    },
    {
      parentId: 2, id: 5, title: 'hasta la vista', desc: 'z fartem',
      date:     new Date(),
    },
  ];

  contains(id: number) : boolean {
    return this.allNotes.some(value => value.id == id);
  }

  getAllNotes(): NoteModel[] {
    // returning copy to avoid changing array from outside
    return this.allNotes.slice();
  }

  getNotesWithParentId(parentId: number): NoteModel[] {
    return this.allNotes.filter(note => note.parentId == parentId);
  }

  getNote(id: number): NoteModel | undefined {
    // TODO: Add some kind of error handling when user enter note that doesnt exists
    return this.allNotes.find(note => note.id == id);
  }
}
