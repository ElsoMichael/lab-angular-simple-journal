import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EntriesService } from '../services/entries.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [EntriesService]
})
export class SingleEntryComponent implements OnInit {
  journal: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private entryService: EntriesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getSingleEntry(params['id']);
    });
  }

  getSingleEntry(id) {
    this.entryService.get(id)
      .subscribe((journal) => {
        this.journal = journal
      });
  }

}
