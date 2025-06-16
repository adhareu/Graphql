import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from '../book-list/book-list.component';
import { BookFormComponent } from '../book-form/book-form.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,BookListComponent, BookFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'graphql-angular-ui';
}
