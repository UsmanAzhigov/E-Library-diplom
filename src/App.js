import React from 'react';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import SearchBooks from './SearchBooks';
import { Route } from 'react-router-dom';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
    AllBooks: [],
  };

  componentDidMount() {
    this.LoadBooks();
  }

  LoadBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  };

  changeShelf = (bookchange, shelf) => {
    BooksAPI.update(bookchange, shelf).then(() => this.LoadBooks());
    this.setState((state) => ({
      AllBooks: state.AllBooks.map((b) => {
        if (b.id === bookchange.id) {
          b.shelf = shelf;
        }
        return b;
      }),
    }));
  };

  OnSearch = (query) => {
    if (query) {
      BooksAPI.search(query).then((AllBooks) => {
        if (AllBooks.hasOwnProperty('error')) {
          this.setState({ AllBooks: [] });
        } else {
          this.setState((state) => ({
            AllBooks: AllBooks.map((b) => {
              const bookInShelf = state.books.find((bis) => bis.id === b.id);
              if (bookInShelf) b.shelf = bookInShelf.shelf;
              return b;
            }),
          }));
        }
      });
    } else {
      this.setState({ AllBooks: [] });
    }
  };

  clearArray = () => {
    this.setState({ AllBooks: [] });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <BookShelf book={this.state.books} onChange={this.changeShelf} />}
        />

        <Route
          path="/Search"
          render={() => (
            <SearchBooks
              onClick={this.clearArray}
              book={this.state.AllBooks}
              OnSearch={this.OnSearch}
              onChange={this.changeShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
