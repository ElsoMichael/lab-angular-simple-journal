import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../services/entries.service';

@Component({
  selector: 'app-client-entry-list',
  templateUrl: './client-entry-list.component.html',
  styleUrls: ['./client-entry-list.component.css'],
  providers: [EntriesService]
})
export class ClientEntryListComponent implements OnInit {
  journals;

  constructor(private journal: EntriesService) { }

  ngOnInit() {
    this.journal.getList()
      .subscribe((journals) => {
        this.journals = journals;
      });
  }

}
