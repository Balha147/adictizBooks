import { Component, OnInit,Inject  } from '@angular/core';
import { Input } from "@angular/core";
import { BookItem } from "src/app/models/BookItem";
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-ad-popup',
  templateUrl: './ad-popup.component.html',
  styleUrls: ['./ad-popup.component.scss']
})
export class AdPopupComponent implements OnInit {
  @Input() bookById = new BookItem();
  @Input() allBooks: BookItem[] = [];
  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    return this.getBookById;
  }
    getBookById(book: BookItem) {
    this.bookById = this.allBooks.find(x => x.id === book.id);
    return this.bookById;
  }

}
