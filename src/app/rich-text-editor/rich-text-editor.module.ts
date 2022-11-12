import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { HeaderComponent } from './rich-text-editor/header/header.component';
import { FormsModule } from '@angular/forms';
import { TextSizeComponent } from './rich-text-editor/text-size/text-size.component';
import { TextFontComponent } from './rich-text-editor/text-font/text-font.component';

@NgModule({
  declarations: [RichTextEditorComponent, HeaderComponent, TextSizeComponent, TextFontComponent],
  imports: [CommonModule, FormsModule],
  exports: [RichTextEditorComponent],
})
export class RichTextEditorModule {}
