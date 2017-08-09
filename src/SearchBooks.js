import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'



class SearchBooks extends Component {

        state = {
            query:''
        }

        updateQuery = (query) => {
            this.setState({query: query.trim() })
        }

    render () {
             const { book }= this.props
        let showBooks
        if(this.state.query){
            const match= new RegExp(escapeRegExp(this.state.query), 'i')
            showBooks= this.props.book.filter((book) => match.test(book.title ))
        } else {
            showBooks = this.props.book
        }

        showBooks.sort(sortBy('title'))

        return (

                    <div className="search-books">
                        <div className="search-books-bar">
                            <Link className="close-search" to="/">Close</Link>

                            <div className="search-books-input-wrapper">

                                <input type="text"
                                       value={this.state.query}
                                       onChange={(event) => this.updateQuery(event.target.value)}
                                       placeholder="Search by title or author"/>

                            </div>

                        </div>


                        <div className="search-books-results">
                            <ol className="books-grid">
                                {showBooks.map((Book) => (
                                    <li key={Book.id}>
                                        <div className="book">
                                            <div className="book-top">
                                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${Book.imageLinks.thumbnail})`}}></div>
                                                <div className="book-shelf-changer">
                                                    <select className="books-grid">
                                                        <option value="none" >Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="book-title">{Book.title}</div>
                                            <div className="book-authors">{Book.authors}</div>
                                        </div>


                                    </li>

                                ))}
                            </ol>
                        </div>
                    </div>



        )
    }
}

export default SearchBooks


