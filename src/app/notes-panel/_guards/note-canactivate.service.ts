import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { NoteService } from '../../shared/note.service';

@Injectable()
export class NoteCanactivate implements CanActivate {
  constructor(private noteService: NoteService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const request = this.noteService.contains(+route.params['id']);
    if (!request) {
      this.router.navigate(['/error']);
      return false;
    }

    return request;
  }
}
