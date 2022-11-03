import { Component, Input, OnInit } from '@angular/core';
import { NoteModel } from '../../shared/note.model';

@Component({
  selector: 'app-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.scss'],
})
export class NoteListItemComponent implements OnInit {
  @Input() note: NoteModel;

  constructor() {}

  ngOnInit(): void {}

  displayDate(): string {
    return this.note.date
      ? this.note.date?.toDateString().split(' ').slice(1).join(' ')
      : '';
  }
}
