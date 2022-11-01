import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree,
}                     from '@angular/router';
import { Observable } from 'rxjs';
import {
  NoteService,
}                     from '../../../shared/note.service';

@Injectable()
export class TagsGuard implements CanActivate {
  constructor(private noteService: NoteService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (route.params['tag'] == 'all') {
      return true;
    }

    const request = this.noteService.getAllTags().has(route.params['tag']);

    if (!request) {
      this.router.navigate(['/error']);
      return false;
    }

    return request;
  }
}
