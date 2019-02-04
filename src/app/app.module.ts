import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { TextListComponent } from './text-list/text-list.component';
import { ImageComponent } from './image/image.component';
import { ImageListComponent } from './image-list/image-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    TextListComponent,
    ImageComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
