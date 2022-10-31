import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }        from './home/home.component';
import { NotebookComponent }    from './notebook/notebook.component';
import { NoteComponent }        from './notebook/note/note.component';
import { NotesGuard }           from './notebook/_guards/notes-guard.service';
import { ErrorPageComponent }   from './error-page/error-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'all-notes', component: NotebookComponent, children: [
      {path: 'note/:id', component: NoteComponent, canActivate: [NotesGuard]},
    ]},
  {
    path: 'notebook/:id', component: NotebookComponent, children: [
      {path: 'note/:id', component: NoteComponent, canActivate: [NotesGuard]},
    ],
  },
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
