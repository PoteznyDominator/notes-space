import { Component, Input, OnInit } from '@angular/core';
import { NotebookModel }            from '../../shared/notebook.model';

@Component({
  selector: 'app-notebook-list-item',
  templateUrl: './notebook-list-item.component.html',
  styleUrls: ['./notebook-list-item.component.scss']
})
export class NotebookListItemComponent implements OnInit {
  @Input() notebook: NotebookModel;

  constructor() { }

  ngOnInit(): void {
  }

}
