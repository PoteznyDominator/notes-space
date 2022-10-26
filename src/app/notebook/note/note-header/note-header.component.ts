import { Component, Input, OnInit } from '@angular/core';
import { NotebookService }          from '../../../shared/notebook.service';

@Component({
  selector: 'app-note-header',
  templateUrl: './note-header.component.html',
  styleUrls: ['./note-header.component.scss']
})
export class NoteHeaderComponent implements OnInit {
  @Input() notebookTitle: string;
  isRotated: boolean = false;

  constructor(private notebookService: NotebookService) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.isRotated = !this.isRotated;
    this.notebookService.toggleSidebar.emit();
  }
}
