import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }        from './home/home.component';
import { NotesPanelComponent }  from './notes-panel/notes-panel.component';
import { NoteComponent }        from './notes-panel/note/note.component';
import { NotesGuard }           from './notes-panel/_guards/notes-guard.service';
import { ErrorPageComponent }   from './error-page/error-page.component';
import { TagsGuard }            from './sidebar/tags-list/_guards/tags-guard.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'notes/:tag', component: NotesPanelComponent, canActivate: [TagsGuard], children: [
      {path: ':id', component: NoteComponent, canActivate: [NotesGuard]},
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
