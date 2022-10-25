export interface NoteModel {
  parentId:number,
  id: number,
  title: string,
  desc?: string,
  date?: Date,
  imageUrl?: string,
}
