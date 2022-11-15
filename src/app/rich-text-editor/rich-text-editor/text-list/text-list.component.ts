import { Component, OnInit } from '@angular/core';
import { RichTextEditorService } from '../../rich-text-editor.service';

@Component({
  selector: 'app-text-list',
  templateUrl: './text-list.component.html',
  styleUrls: ['./text-list.component.scss'],
})
export class TextListComponent implements OnInit {
  constructor(private richTextService: RichTextEditorService) {}

  ngOnInit(): void {}

  changeListStyle(e: Event, secondElement: HTMLInputElement) {
    let element = e.target as HTMLInputElement;
    if (element.checked) {
      secondElement.checked = false;
    }

    this.richTextService.insertList(element.id);
  }
}
