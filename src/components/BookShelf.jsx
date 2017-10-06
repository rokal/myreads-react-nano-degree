import React from 'react';
import Book from './Book';

const BookShelf = (props) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelf.title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {props.shelf.books.map((book, index) => <li key={index}><Book shelf={props.shelf.value} book={book} onOptionChanged={props.onBookOptionChanged}/></li>)}
            </ol>
        </div>
    </div>
);

export default BookShelf;
