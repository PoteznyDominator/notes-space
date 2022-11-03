import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotesPanelComponent } from './notes-panel/notes-panel.component';
import { NoteListItemComponent } from './notes-panel/note-list-item/note-list-item.component';
import { NoteComponent } from './notes-panel/note/note.component';
import { NoteHeaderComponent } from './notes-panel/note/note-header/note-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NotesGuard } from './notes-panel/_guards/notes-guard.service';
import { TagsListComponent } from './sidebar/tags-list/tags-list.component';
import { TagsGuard } from './sidebar/tags-list/_guards/tags-guard.service';
import { RichTextEditorModule } from './rich-text-editor/rich-text-editor.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NotesPanelComponent,
    NoteListItemComponent,
    NoteComponent,
    NoteHeaderComponent,
    HomeComponent,
    ErrorPageComponent,
    TagsListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    RichTextEditorModule,
  ],
  providers: [NotesGuard, TagsGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
