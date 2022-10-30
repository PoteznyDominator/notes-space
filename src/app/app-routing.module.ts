import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }        from './home/home.component';
import { NotebookComponent }    from './notebook/notebook.component';
import { NoteComponent }        from './notebook/note/note.component';
import { AuthGuard }            from './auth-guard.service';
import { ErrorPageComponent }   from './error-page/error-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'notebook/:id', component: NotebookComponent, children: [
      {path: 'note/:id', component: NoteComponent, canActivate: [AuthGuard]},
    ],
  },
  {path: 'all-notes', component: NoteComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
