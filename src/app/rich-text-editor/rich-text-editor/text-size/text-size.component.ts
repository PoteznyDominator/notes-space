import { Component, OnInit } from '@angular/core';
import { RichTextEditorService } from '../../rich-text-editor.service';

@Component({
  selector: 'app-text-size',
  templateUrl: './text-size.component.html',
  styleUrls: ['./text-size.component.scss'],
})
export class TextSizeComponent implements OnInit {
  // initial values for text size
  textSizeOptions: Map<string, string> = new Map<string, string>([
    ['Paragraph', 'P'],
    ['Header 1', 'H1'],
    ['Header 2', 'H2'],
    ['Header 3', 'H3'],
    ['Header 4', 'H4'],
    ['Header 5', 'H5'],
    ['Header 6', 'H6'],
  ]);

  constructor(private richTextService: RichTextEditorService) {}

  ngOnInit(): void {}

  changeTextHeading(e: Event) {
    this.richTextService.modifyText('formatBlock', (e.target as HTMLSelectElement).value);
  }
}
