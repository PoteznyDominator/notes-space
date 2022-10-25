import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { NgbModule }        from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotebookListItemComponent } from './sidebar/notebook-list-item/notebook-list-item.component';
import { NotebookComponent } from './notebook/notebook.component';
import { NoteListItemComponent } from './notebook/note-list-item/note-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NotebookListItemComponent,
    NotebookComponent,
    NoteListItemComponent,
  ],
  imports:      [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers:    [],
  bootstrap:    [AppComponent],
})
export class AppModule {}
