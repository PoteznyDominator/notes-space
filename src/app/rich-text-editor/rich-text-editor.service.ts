import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RichTextEditorService {
  private options = {
    list: '',
  };

  setFocus: Subject<boolean> = new Subject<boolean>();
  contentSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {}

  modifyText(command: string, value: string = '') {
    document.execCommand(command, false, value);
    this.setFocus.next(true);
  }

  insertList(listType: string) {
    if (this.options.list === listType) {
      this.modifyText('removeFormat');
    }

    this.options.list = listType;
    this.modifyText(`insert${listType}`);
  }

  getComponentContent() {
    return this.contentSubject.getValue();
  }
}
