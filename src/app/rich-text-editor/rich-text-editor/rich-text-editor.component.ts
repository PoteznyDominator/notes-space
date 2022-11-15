import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NoteModel } from '../../shared/note.model';
import { RichTextEditorService } from '../rich-text-editor.service';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss'],
})
export class RichTextEditorComponent implements OnInit {
  @Input() note: NoteModel;
  @ViewChild('textContainer', { static: true }) container: ElementRef;
  constructor(private richTextService: RichTextEditorService) {}

  ngOnInit(): void {
    // adding height depending on the offset
    this.container.nativeElement.style.height = `${
      window.innerHeight - this.container.nativeElement.offsetTop
    }px`;

    this.richTextService.setFocus.subscribe(() => this.container.nativeElement.focus());
  }

  focusTextContainer() {
    this.container.nativeElement.focus();
  }

  log() {
    console.log(this.container.nativeElement.innerHTML);
  }
}
