import { Component, OnInit } from '@angular/core';
import { NoteService }       from '../../shared/note.service';
import { NoteModel }         from '../../shared/note.model';
import { NotebookService }        from '../../shared/notebook.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription }           from 'rxjs';

@Component({
  selector:    'app-note',
  templateUrl: './note.component.html',
  styleUrls:   ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  note: NoteModel;
  paramsSubscription : Subscription;

  constructor(private noteService: NoteService, private notebookService: NotebookService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.note = this.noteService.getNote(+params['id'])!;
    });
  }

  getNotebookTitle(): string {
    if (!this.note) {
      return '';
    }

    return this.notebookService.getNotebook(this.note.parentId)?.title!;
  }
}
