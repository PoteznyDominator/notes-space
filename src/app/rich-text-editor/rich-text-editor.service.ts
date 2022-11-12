import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RichTextEditorService {
  constructor() {}

  modifyText(command: string, value: string = '') {
    document.execCommand(command, false, value);
  }
}
