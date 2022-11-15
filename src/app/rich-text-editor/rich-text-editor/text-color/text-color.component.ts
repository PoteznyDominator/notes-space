import { Component, OnInit } from '@angular/core';
import { RichTextEditorService } from '../../rich-text-editor.service';

@Component({
  selector: 'app-text-color',
  templateUrl: './text-color.component.html',
  styleUrls: ['./text-color.component.scss'],
})
export class TextColorComponent implements OnInit {
  colors: Map<string, string> = new Map<string, string>([
    ['foreColor', '#000'],
    ['hiliteColor', '#FFF'],
  ]);
  constructor(private richTextService: RichTextEditorService) {}

  ngOnInit(): void {}

  changeColor(e: Event) {
    const element = e.target as HTMLInputElement;
    this.colors.set(element.id, element.value);

    this.richTextService.modifyText(element.id, element.value);
  }
}
