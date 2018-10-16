import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ad-search',
  templateUrl: './ad-search.component.html',
  styleUrls: ['./ad-search.component.scss']
})
export class AdSearchComponent implements OnInit {

  constructor() { }
  @Input() allBooks: any[] = [];
  @Input() customBookFilter: any = { authors: '', title: '', categories: '', language: ''};
  ngOnInit() {
  }

}
