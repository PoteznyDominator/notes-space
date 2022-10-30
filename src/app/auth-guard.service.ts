import { Injectable }      from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree,
}                          from '@angular/router';
import { Observable }      from 'rxjs';
import {
  NoteService,
}                          from './shared/note.service';
import { NotebookService } from './shared/notebook.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private notebookService: NotebookService,private noteService: NoteService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const request = this.noteService.contains(+route.params['id']);
    if (!request) {
      this.router.navigate(['/error']);
      return false;
    }

    // checking if notebook contains note with id
    const url = state.url.split('/');
    if (url.includes('notebook')) {
      // nest value after notebook is it's id
      const notebook = this.notebookService.getNotebook(+url[url.indexOf('notebook') + 1]);
      const note = this.noteService.getNote(+route.params['id']);
      console.log(note, notebook);
      if (notebook?.id != note?.parentId) {
        this.router.navigate(['/error']);
        return false;
      }
    }

    return request;
  }
}
