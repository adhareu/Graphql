import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const GET_BOOKS = gql`
  query {
    books {
      
        id
        title
        author
      
    }
  }
`;

const ADD_BOOK = gql`
  mutation($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      id
      title
      author
    }
  }
`;

const UPDATE_BOOK = gql`
  mutation($id: Int!, $title: String!, $author: String!) {
    updateBook(id: $id, title: $title, author: $author) {
      id
      title
      author
    }
  }
`;

const DELETE_BOOK = gql`
  mutation($id: Int!) {
    deleteBook(id: $id)
  }
`;

@Injectable({
  providedIn: 'root'
})
export class GraphqlclientService {

  constructor(private apollo: Apollo) { }
  getBooks() {
    return this.apollo.watchQuery<any>({
      query: GET_BOOKS
    }).valueChanges;
  }

  addBook(title: string, author: string) {
    return this.apollo.mutate({
      mutation: ADD_BOOK,
      variables: { title, author }
    });
  }

  updateBook(id: number, title: string, author: string) {
    return this.apollo.mutate({
      mutation: UPDATE_BOOK,
      variables: { id, title, author }
    });
  }

  deleteBook(id: number) {
    return this.apollo.mutate({
      mutation: DELETE_BOOK,
      variables: { id }
    });
  }
}
