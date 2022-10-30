import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule }          from './app-routing.module';
import { AppComponent }              from './app.component';
import { NgbModule }                 from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent }          from './sidebar/sidebar.component';
import { NotebookListItemComponent } from './sidebar/notebook-list-item/notebook-list-item.component';
import { NotebookComponent }         from './notebook/notebook.component';
import { NoteListItemComponent }     from './notebook/note-list-item/note-list-item.component';
import { NoteComponent }             from './notebook/note/note.component';
import { NoteHeaderComponent }       from './notebook/note/note-header/note-header.component';
import { BrowserAnimationsModule }   from '@angular/platform-browser/animations';
import { HomeComponent }             from './home/home.component';
import { ErrorPageComponent }        from './error-page/error-page.component';
import { AuthGuard }                 from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NotebookListItemComponent,
    NotebookComponent,
    NoteListItemComponent,
    NoteComponent,
    NoteHeaderComponent,
    HomeComponent,
    ErrorPageComponent,
  ],
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers:    [AuthGuard],
  bootstrap:    [AppComponent],
})
export class AppModule {}
