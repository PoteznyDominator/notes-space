import { Component, OnDestroy, OnInit }               from '@angular/core';
import { NoteModel }                                  from '../shared/note.model';
import { NotebookService }                            from '../shared/notebook.service';
import { NotebookModel }                              from '../shared/notebook.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, Params, Router }             from '@angular/router';
import { Subscription }                               from 'rxjs';
import { NoteService }                                from '../shared/note.service';

@Component({
  selector:    'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls:   ['./notebook.component.scss'],
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
export class NotebookComponent implements OnInit, OnDestroy {
  notebook: NotebookModel;
  isSideBarHidden: boolean = false;
  paramsSubscription: Subscription;

  constructor(private notebookService: NotebookService, private noteService: NoteService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.notebookService.toggleSidebar.subscribe(() => {
      this.isSideBarHidden = !this.isSideBarHidden;
    });

    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      // displaying all notes page
      if (this.router.url.includes('all-notes')) {
        this.notebook = {title: 'All notes', notes: this.noteService.getAllNotes()};
      }

      if (params['id']) {
        this.notebook = this.notebookService.getNotebook(+params['id'])!;
      }
    });
  }

  getSlideValue(): string {
    return this.isSideBarHidden ? 'out' : 'in';
  }

  onNoteSelected(note: NoteModel) {
    this.notebook.currentNote = note;
  }

  // removing subscription when component is deleted
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
