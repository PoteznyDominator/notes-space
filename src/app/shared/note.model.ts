export interface NoteModel {
  id: number;
  title: string;
  content?: string;
  imageUrl?: string;
  date: Date;
  tags: Set<string>;
}

export function initNote(parameters: Partial<NoteModel>): NoteModel {
  // temporary
  const defaults = {
    id: 1,
    title: 'dasda',
    date: new Date(),
    tags: new Set<string>(),
  };

  return {
    ...defaults,
    ...parameters,
  };
}
