import { Component, OnInit } from '@angular/core';
import { RichTextEditorService } from '../../rich-text-editor.service';

@Component({
  selector: 'app-text-font',
  templateUrl: './text-font.component.html',
  styleUrls: ['./text-font.component.scss'],
})
export class TextFontComponent implements OnInit {
  fonts: string[] = [
    'Arial',
    'Courier New',
    'Georgia',
    'Helvetica',
    'Segoe UI',
    'Sans-Serif',
    'Times New Roman',
    'Impact',
  ];
  constructor(private richTextService: RichTextEditorService) {}

  ngOnInit(): void {}

  changeTextFont(e: Event) {
    this.richTextService.modifyText('fontName', (e.target as HTMLSelectElement).value);
  }
}
