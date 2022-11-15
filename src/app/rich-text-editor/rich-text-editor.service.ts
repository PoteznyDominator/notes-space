import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RichTextEditorService {
  private options = {
    list: '',
  };

  constructor() {}

  setFocus: EventEmitter<boolean> = new EventEmitter<boolean>();

  modifyText(command: string, value: string = '') {
    document.execCommand(command, false, value);
    this.setFocus.emit(true);
  }

  insertList(listType: string) {
    if (this.options.list === listType) {
      this.modifyText('removeFormat');
    }

    this.options.list = listType;

    this.modifyText(`insert${listType}`);
  }
}
