import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class BookShelf extends Component {


    UserMessage(ready) {
        return this.props.book.map((getbook) => {

            if (getbook.shelf === ready) {
                return (
                    <Book
                        key={getbook.id}
                        book={getbook}
                        onChange={this.props.onChange}
                    />

                )
            }
        })
    }
        render()
        {
            return (
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Currently Reading</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {this.UserMessage('currentlyReading')}
                                    </ol>
                                </div>
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Want to Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {this.UserMessage('wantToRead')}
                                    </ol>
                                </div>
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {this.UserMessage('read')}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="open-search">
                        <Link
                            to="/Search"
                            // onClick={() => this.setState({ showSearchPage: true })}
                        >Add a book</Link>
                    </div>
                </div>
            )
    }

}


export default BookShelf;


