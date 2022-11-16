import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NoteModel } from '../../shared/note.model';
import { RichTextEditorService } from '../rich-text-editor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss'],
})
export class RichTextEditorComponent implements OnInit, OnChanges, OnDestroy {
  @Input() note: NoteModel;
  @ViewChild('textContainer', { static: true }) container: ElementRef;
  private focusSubscription: Subscription;

  constructor(private richTextService: RichTextEditorService) {}

  ngOnInit(): void {
    // adding height depending on the offset
    this.container.nativeElement.style.height = `${
      window.innerHeight - this.container.nativeElement.offsetTop
    }px`;

    this.focusSubscription = this.richTextService.setFocus.subscribe(() =>
      this.container.nativeElement.focus()
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.richTextService.contentSubject.next(changes['note'].currentValue.content);
  }

  ngOnDestroy() {
    this.focusSubscription.unsubscribe();
  }

  focusTextContainer() {
    this.container.nativeElement.focus();
  }

  contentChange() {
    this.richTextService.contentSubject.next(this.container.nativeElement.innerHTML);
  }
}
