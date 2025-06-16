import { Component,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphqlclientService } from '../graphqlclient.service';
@Component({
  selector: 'app-book-list',
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit{
   books: any[] = [];
   loading = true;
  constructor(private bookService: GraphqlclientService) {}
  ngOnInit() {
    this.loadBooks();
  }
   loadBooks() {
    this.bookService.getBooks().subscribe(result => {
      debugger
      this.books = result.data.books;
      this.loading = false;
    });
  }
   deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(() => this.loadBooks());
  }
}
