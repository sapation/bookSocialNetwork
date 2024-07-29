import { Component } from '@angular/core';
import { PageResponseBorrowedBookResponse } from 'src/app/services/models';
import { BookService } from 'src/app/services/services';

@Component({
  selector: 'app-retrun-books',
  templateUrl: './retrun-books.component.html',
  styleUrls: ['./retrun-books.component.scss'],
})
export class RetrunBooksComponent {
  returnedBooks: PageResponseBorrowedBookResponse = {};
  page = 0;
  size = 5;

  constructor(
    private bookService: BookService,
  ) {}

  ngOnInit(): void {
    this.findAllBorrowedBooks();
  }

  findAllBorrowedBooks() {
    this.bookService
      .findAllReturnedBooks({
        page: this.page,
        size: this.size,
      })
      .subscribe({
        next: (response) => {
          this.returnedBooks = response;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllBorrowedBooks;
  }

  goToPreviousPage() {
    this.page--;
    this.findAllBorrowedBooks;
  }

  goToPage(page: number) {
    this.page = page;
    this.findAllBorrowedBooks;
  }

  goToNextPage() {
    this.page++;
    this.findAllBorrowedBooks;
  }

  goToLastPage() {
    this.page = (this.returnedBooks.totalPages as number) - 1;
    this.findAllBorrowedBooks;
  }

  get isLastPage(): boolean {
    return this.page == (this.returnedBooks.totalPages as number) - 1;
  }
}
