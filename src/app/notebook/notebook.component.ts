import { Component, OnDestroy, OnInit } from '@angular/core';
import { NoteModel }                    from '../shared/note.model';
import { NotebookService }                            from '../shared/notebook.service';
import { NotebookModel }                              from '../shared/notebook.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, Params }                     from '@angular/router';
import { Subscription }                               from 'rxjs';

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
  paramsSubscription : Subscription;

  constructor(private notebookService: NotebookService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.notebookService.toggleSidebar.subscribe(() => {
      this.isSideBarHidden = !this.isSideBarHidden;
    });

    const notebook = this.notebookService.getNotebook(+this.route.snapshot.params['id']);
    if (notebook) {
      this.notebook = notebook;
    }

    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      const notebook = this.notebookService.getNotebook(+params['id']);
      if (notebook) {
        this.notebook = notebook;
      }
    });

    // // temporary for visual debug
    // this.notebook = this.notebookService.getAllNotebooks()[0];
    // this.notebook.currentNote = this.notebook.notes[0];
    // //Todo: when loading component without currentNote add it as first item of notes
    //
    // this.notebookService.onNotebookSelected.subscribe((notebook) => {
    //   this.notebook = notebook;
    // });
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
