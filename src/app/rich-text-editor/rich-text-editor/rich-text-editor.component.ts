import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss'],
})
export class RichTextEditorComponent implements OnInit {
  @ViewChild('textContainer', { static: true }) container: ElementRef;
  constructor() {}

  ngOnInit(): void {
    // adding height depending on the offset
    this.container.nativeElement.style.height = `${
      window.innerHeight - this.container.nativeElement.offsetTop
    }px`;
  }

  focusTextContainer() {
    this.container.nativeElement.focus();
  }
}
