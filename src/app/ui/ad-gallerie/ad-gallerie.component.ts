import { Component, OnInit,Inject  } from '@angular/core';
import { BookItem } from './../../models/BookItem';
import { BooksData } from './../../models/BooksData';
import { BooksService } from './../../services/books-service/books.service';
import { AdPopupComponent } from '../ad-popup/ad-popup.component';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialog } from '@angular/material';
@Component({
  selector: 'app-ad-gallerie',
  templateUrl: './ad-gallerie.component.html',
  styleUrls: ['./ad-gallerie.component.scss']
})
export class AdGallerieComponent implements OnInit {

  constructor(private booksService: BooksService,public dialog: MatDialog) { }
  public errorMsg;
  modalTitle: string;
  BooksData = new BooksData();
  allBooks: BookItem[] = [];
  categories: any[] = [];
  uniqueCategoriesItems: any[] = [];
  customBookFilter: any = { 
   authors: '',
   title: '', 
   categories: '', 
   language: '' 
  };

  ngOnInit() {
    this.booksService.getAllBooks().subscribe(
      books => {
        this.allBooks = books.items;
        for (let index = 0; index < books.items.length; index++) {
          const item = books.items[index];
          if (item.volumeInfo.categories) {
            this.categories.push(item.volumeInfo.categories[0]);
          }
        }
        this.uniqueCategoriesItems = Array.from(new Set(this.categories));
      },
      error => this.errorMsg = error
    );
  }

openModal(book: BookItem) {
 const dialogConfig = new MatDialogConfig();
const dialogRef = this.dialog.open(AdPopupComponent, dialogConfig);
dialogRef.componentInstance.bookById = book;
 }

}
