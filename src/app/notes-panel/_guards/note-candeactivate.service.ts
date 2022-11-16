import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { NoteComponent } from '../note/note.component';
import { Observable } from 'rxjs';
import { RichTextEditorService } from '../../rich-text-editor/rich-text-editor.service';

@Injectable({
  providedIn: 'root',
})
export class NoteCanDeactivate implements CanDeactivate<NoteComponent> {
  constructor(private richTextService: RichTextEditorService) {}

  canDeactivate(
    component: NoteComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // always save content of note while exiting
    component.note.content = this.richTextService.getComponentContent();
    return true;
  }
}
