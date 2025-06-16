import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GraphqlclientService } from '../graphqlclient.service';
@Component({
  selector: 'app-book-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent {
 book = {
    title: '',
    author: '',
  };
  constructor(private bookService: GraphqlclientService) {}
  addBook() {
    this.bookService.addBook(this.book.title, this.book.author).subscribe(() => {
      this.book.title = '';
      this.book.author = '';
    });
  }
}
