import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { HeaderComponent } from './rich-text-editor/header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RichTextEditorComponent, HeaderComponent],
  imports: [CommonModule, FormsModule],
  exports: [RichTextEditorComponent],
})
export class RichTextEditorModule {}
