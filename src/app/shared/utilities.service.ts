import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  constructor() {}

  toggleSidebar: Subject<boolean> = new Subject<boolean>();
}
