import { Component, OnInit } from '@angular/core';
import { NoteService }       from '../../shared/note.service';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.scss']
})
export class TagsListComponent implements OnInit {
  tags: Set<string>;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.tags = this.noteService.getAllTags();
  }

}
