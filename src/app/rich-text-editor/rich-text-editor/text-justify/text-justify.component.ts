import { Component, OnInit } from '@angular/core';
import { RichTextEditorService } from '../../rich-text-editor.service';

@Component({
  selector: 'app-text-justify',
  templateUrl: './text-justify.component.html',
  styleUrls: ['./text-justify.component.scss'],
})
export class TextJustifyComponent implements OnInit {
  justifyOptions: string[] = ['left', 'center', 'right'];

  constructor(private richTextService: RichTextEditorService) {}

  ngOnInit(): void {}

  getInputId(str: string): string {
    return `justify${str.charAt(0).toUpperCase() + str.slice(1)}`;
  }

  changeJustify(e: Event) {
    this.richTextService.modifyText((e.target as HTMLElement).id);
  }
}
