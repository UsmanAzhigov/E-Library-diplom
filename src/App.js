import React from 'react'
import * as BooksAPI from './BooksAPI'
import CurrentlyReading from './CurrentlyReading'
import SearchBooks from './SearchBooks'
import {  Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {

      books: [],
      AllBooks: []


  }

  componentDidMount() {
      this.LoadBooks()
  }

    LoadBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    OnSearch = () => {
      BooksAPI.search().then((AllBooks) => {
          this.setState ({AllBooks})

      })
    }




    // OnSearch = (query) => {
    //   BooksAPI.search(query).then((AllBooks) => {
    //       this.setState(state => ({
    //           AllBooks : AllBooks.map (b => {
    //               const BooksInSearch = state.book.find(bis => bis.id === b.id);
    //               if (BooksInSearch) b.shelf = BooksInSearch.shelf;
    //               return b;
    //           })
    //       }))
    //   })
    // }


  render() {
    return (
        <div className="app">


            <Route exact path="/" render={() => (
                <CurrentlyReading

                />
            )}
            />


            <Route path="/Search" render={() => (
                <SearchBooks
                    book={this.state.AllBooks}
                    OnSearch={this.OnSearch}


                />
            )}
            />

        </div>



    )
  }
}

export default BooksApp
