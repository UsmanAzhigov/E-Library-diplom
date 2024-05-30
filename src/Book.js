import React from 'react';

const Book = (props) => {
  const { shelf, imageLinks, title, authors } = props.book;

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${imageLinks && props.book.imageLinks.thumbnail})`,
            }}></div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={(e) => props.onChange(props.book, e.target.value)}>
              <option value="none">Переместить в...</option>
              <option value="currentlyReading">Читаю сейчас</option>
              <option value="wantToRead">Хочу прочитать</option>
              <option value="read">Прочитано</option>
              <option value="none">Нет</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  );
};

export default Book;
