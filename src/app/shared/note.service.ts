import { Injectable } from '@angular/core';
import { initNote, NoteModel } from './note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor() {
    // temporary
    this.allNotes[0].tags.add('dupa').add('kolej');
    this.allNotes[1].tags.add('dupa');

    // saving all tags
    for (let note of this.allNotes) {
      if (note.tags) {
        for (let tag of note.tags!) {
          this.allTags.add(tag);
        }
      }
    }
  }

  private allTags: Set<string> = new Set<string>();
  //TODO: scuffed as fuck so make interface better and think about default values
  private allNotes: NoteModel[] = [
    initNote({
      id: 1,
      title: 'example note here to use',
      desc: 'patatatata tatat ' + 'dasdasdasdasda sdasddddada' + ' dasdwdaeadaaaaaaa adadasdas',
      imageUrl: 'https://picsum.photos/400/400',
    }),
    initNote({
      id: 2,
      title: 'dupa blada olelela adasdas',
      desc:
        'patatatata tatat dasda' +
        ' eadasd' +
        'dasdasdasdasda sdasddddada dasdwdaeadaaaaaaa adadasda',
    }),
    initNote({
      id: 3,
      title: 'example note here',
      desc: 'kolega obok',
      imageUrl: 'https://picsum.photos/400/500',
    }),
    initNote({
      id: 4,
      title: 'hasta la vista',
      desc: 'z fartem',
      imageUrl: 'https://picsum.photos/200/300',
    }),
    initNote({
      id: 5,
      title: 'hasta la vista',
      desc: 'z fartem',
    }),
  ];

  getAllTags(): Set<string> {
    return this.allTags;
  }

  contains(id: number): boolean {
    return this.allNotes.some(value => value.id == id);
  }

  getAllNotes(): NoteModel[] {
    // returning copy to avoid changing array from outside
    return this.allNotes.slice();
  }

  getNotesByTag(tagName: string): NoteModel[] {
    return this.allNotes.filter(note => note.tags?.has(tagName));
  }

  getNoteById(id: number): NoteModel | undefined {
    // TODO: Add some kind of error handling when user enter note that doesnt exists
    return this.allNotes.find(note => note.id == id);
  }

  addTag(id: number, tag: string) {
    const note = this.allNotes.find(note => note.id == id)!;
    note.tags?.add(tag);
    this.allTags.add(tag);
  }

  removeTag(id: number, tag: string) {
    const note = this.allNotes.find(note => note.id == id)!;
    note.tags?.delete(tag);

    // removing tag if it doesn't belong to any note
    if (this.allNotes.filter(note => note.tags?.has(tag)).length == 0) {
      this.allTags.delete(tag);
    }
  }
}
