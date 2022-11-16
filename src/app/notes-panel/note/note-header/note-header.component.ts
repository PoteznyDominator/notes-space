import { Component, Input, OnInit } from '@angular/core';
import { UtilitiesService } from '../../../shared/utilities.service';
import { NoteModel } from '../../../shared/note.model';
import { NoteService } from '../../../shared/note.service';

@Component({
  selector: 'app-note-header',
  templateUrl: './note-header.component.html',
  styleUrls: ['./note-header.component.scss'],
})
export class NoteHeaderComponent implements OnInit {
  @Input() note: NoteModel;
  isRotated: boolean = false;

  constructor(private utilitiesService: UtilitiesService, private noteService: NoteService) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.isRotated = !this.isRotated;
    this.utilitiesService.toggleSidebar.next(true);
  }

  addTag(content: HTMLInputElement) {
    const tagName = content.value;
    // clearing input value
    content.value = '';
    this.noteService.addTag(this.note?.id, tagName);
  }

  removeTag(tag: string) {
    this.noteService.removeTag(this.note.id, tag);
  }
}
