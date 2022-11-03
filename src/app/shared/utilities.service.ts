import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  constructor() {}

  toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
}
