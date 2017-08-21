import React, { Component } from 'react'
//import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
import  Book from './Book'

class SearchBooks extends Component {
        state = {
            query:''
        }

        updateQuery = (query) => {
            this.setState({query: query.trim() })
            this.props.OnSearch(query)
        }

    render () {
             //const { Book }= this.props.book
        // let showBooks
        // if(this.state.query){
        //     const match= new RegExp(escapeRegExp(this.state.query), 'i')
        //     showBooks = this.props.book.length && this.props.book.filter ((book) => match.test(book.title  ))
        //
        // } else {
        //     showBooks = this.props.book;
        // }

        // showBooks.sort(sortBy('title'))
        // console.log(showBooks)

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link onClick={this.props.onClick} className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} placeholder="Search by title or author"/>
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.props.book.length && this.props.book.map((sbook, i) => (
                            <Book
                                key={sbook.id}
                                book={sbook}
                                onChange={this.props.onChange}
                            />

                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks


