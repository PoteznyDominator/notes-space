import { Component, OnInit } from '@angular/core';
import { UtilitiesService }  from '../../../shared/utilities.service';

@Component({
  selector:    'app-note-header',
  templateUrl: './note-header.component.html',
  styleUrls:   ['./note-header.component.scss'],
})
export class NoteHeaderComponent implements OnInit {
  isRotated: boolean = false;

  constructor(private utilitiesService: UtilitiesService) {
  }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.isRotated = !this.isRotated;
    this.utilitiesService.toggleSidebar.emit();
  }
}
