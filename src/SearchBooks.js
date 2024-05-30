import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

class SearchBooks extends Component {
  state = {
    query: '',
  };

  updateQuery = (query) => {
    this.setState({ query: query.trim() });
    this.props.OnSearch(query);
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link onClick={this.props.onClick} className="close-search" to="/">
            Закрыть
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
              placeholder="Искать по названию или автору"
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.book.length &&
              this.props.book.map((sbook, i) => (
                <Book key={sbook.id} book={sbook} onChange={this.props.onChange} />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
