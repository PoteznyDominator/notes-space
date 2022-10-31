export interface NoteModel {
  id: number,
  title: string,
  desc?: string,
  date?: Date,
  imageUrl?: string,
  tags?: string[],
}
