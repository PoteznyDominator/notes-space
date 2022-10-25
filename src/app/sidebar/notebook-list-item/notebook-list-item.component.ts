import { Component, Input, OnInit } from '@angular/core';
import { NotebookModel }            from '../../shared/notebook.model';
import { NotebookService }          from '../../shared/notebook.service';

@Component({
  selector: 'app-notebook-list-item',
  templateUrl: './notebook-list-item.component.html',
  styleUrls: ['./notebook-list-item.component.scss']
})
export class NotebookListItemComponent implements OnInit {
  @Input() notebook: NotebookModel;

  constructor(private notebookService: NotebookService) { }

  ngOnInit(): void {
  }

  onNotebookSelected() {
    this.notebookService.onNotebookSelected.emit(this.notebook);
  }
}
