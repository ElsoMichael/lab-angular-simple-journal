import { Routes } from '@angular/router';

import { ClientEntryListComponent } from './client-entry-list/client-entry-list.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';

export const routes: Routes = [
  { path: '', component: ClientEntryListComponent },
  { path: ':id', component: SingleEntryComponent },
  { path: '**', redirectTo: '' }
];