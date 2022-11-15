import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { HeaderComponent } from './rich-text-editor/header/header.component';
import { FormsModule } from '@angular/forms';
import { TextSizeComponent } from './rich-text-editor/text-size/text-size.component';
import { TextFontComponent } from './rich-text-editor/text-font/text-font.component';
import { TextDecorationComponent } from './rich-text-editor/text-decoration/text-decoration.component';
import { TextJustifyComponent } from './rich-text-editor/text-justify/text-justify.component';
import { TextListComponent } from './rich-text-editor/text-list/text-list.component';
import { TextColorComponent } from './rich-text-editor/text-color/text-color.component';

@NgModule({
  declarations: [RichTextEditorComponent, HeaderComponent, TextSizeComponent, TextFontComponent, TextDecorationComponent, TextJustifyComponent, TextListComponent, TextColorComponent],
  imports: [CommonModule, FormsModule],
  exports: [RichTextEditorComponent],
})
export class RichTextEditorModule {}
