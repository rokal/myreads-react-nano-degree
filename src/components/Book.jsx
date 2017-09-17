import React from 'react'
const SELECT_HINT = 'Move to...'
import {SHELVES, getBookStyle} from '../config'
import Select from './Select'

export default class Book extends React.Component {

    handleBookOptionChange = (newOption) => {
        const {book, onOptionChanged} = this.props;
        onOptionChanged(book, newOption)
    }

    render() {
        const {book} = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={getBookStyle(book.imageLinks.smallThumbnail)}></div>
                    <div className="book-shelf-changer">
                        <Select
                            options={SHELVES}
                            onChange={this.handleBookOptionChange}
                            placeholder={SELECT_HINT}
                        />
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
            </div>
        )
    }
}