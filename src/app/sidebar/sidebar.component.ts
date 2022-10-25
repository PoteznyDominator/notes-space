import { Component, OnInit } from '@angular/core';
import { NotebookModel }     from '../shared/notebook.model';
import { NotebookService }   from '../shared/notebook.service';

@Component({
  selector:    'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls:   ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;
  notebooks: NotebookModel[];

  constructor(private notebookService: NotebookService) {
  }

  ngOnInit(): void {
    this.notebooks = this.notebookService.getAllNotebooks();
  }

  notesCount(): number {
    let sum = 0;
    for (let notebook of this.notebooks) {
      sum += notebook.notes.length;
    }
    return sum;
  }

}
