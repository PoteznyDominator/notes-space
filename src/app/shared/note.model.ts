export class NoteModel {
  constructor(public id: number, public title: string, public desc?: string,
              public imageUrl?: string) {
  }
}
