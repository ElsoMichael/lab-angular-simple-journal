import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClientEntryListComponent } from './client-entry-list/client-entry-list.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';

import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ClientEntryListComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }