import { Component, Input, OnInit } from '@angular/core';
import { NoteModel }                from '../shared/note.model';
import { NotebookService }          from '../shared/notebook.service';
import { NotebookModel }            from '../shared/notebook.model';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent implements OnInit {
  notebook: NotebookModel;
  constructor(private notebookService: NotebookService) { }

  ngOnInit(): void {
    this.notebook = this.notebookService.getAllNotebooks()[0]; // temporary for visual debug
    this.notebookService.onNotebookSelected.subscribe((notebook) => {
      this.notebook = notebook;
    })
  }

}
