import React from 'react';

//functional component bcz all we have here is render method

const Book = (props) => {
    const { shelf, imageLinks, title, authors } = props.book

    return(
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks && props.book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={shelf} onChange={e => props.onChange(props.book, e.target.value)}>
                            <option value="none" >Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        </li>
    )
}

export default Book;