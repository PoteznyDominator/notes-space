import { Component, OnInit } from '@angular/core';
import { RichTextEditorService } from '../../rich-text-editor.service';

@Component({
  selector: 'app-text-decoration',
  templateUrl: './text-decoration.component.html',
  styleUrls: ['./text-decoration.component.scss'],
})
export class TextDecorationComponent implements OnInit {
  constructor(private richTextService: RichTextEditorService) {}

  ngOnInit(): void {}

  addDecoration(command: string) {
    this.richTextService.modifyText(command);
  }
}
