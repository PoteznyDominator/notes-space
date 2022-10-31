import { Component, OnDestroy, OnInit }               from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, Params, Router }             from '@angular/router';
import { Subscription }                               from 'rxjs';
import { NoteService }                                from '../shared/note.service';
import { UtilitiesService }                           from '../shared/utilities.service';
import { NotesDataModel }                             from './notes-data.model';

@Component({
  selector:    'app-notes-panel',
  templateUrl: './notes-panel.component.html',
  styleUrls:   ['./notes-panel.component.scss'],
  animations:  [
    trigger('SlideSidebar', [
      state('in', style({
        visibility: 'visible',
        transform:  'translateX(0)',
      })),
      state('out', style({
        visibility: 'hidden',
        transform:  'translateX(-100%)',
      })),
      transition('in <=> out', animate('500ms ease-in-out')),
    ]),
    trigger('SlideHeader', [
      state('in', style({
        'margin-left': 0,
        // width: 300,
      })),
      state('out', style({
        'margin-left': -300,
      })),
      transition('in <=> out', animate('500ms ease-in-out')),
    ]),
  ],
})
export class NotesPanelComponent implements OnInit, OnDestroy {
  notesData: NotesDataModel;
  isSideBarHidden: boolean = false;
  paramsSubscription: Subscription;

  constructor(private utilitiesService: UtilitiesService, private noteService: NoteService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.utilitiesService.toggleSidebar.subscribe(() => {
      this.isSideBarHidden = !this.isSideBarHidden;
    });

    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      if (params['tag'] == 'all') {
        this.notesData = {title: 'All notes', notes: this.noteService.getAllNotes()}
      }
      // this.notebook = {title: 'All notes', notes: this.noteService.getAllNotes()};
    });
  }

  getSlideValue(): string {
    return this.isSideBarHidden ? 'out' : 'in';
  }

  // removing subscription when component is deleted
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
