import React from 'react';
import { object, func, string } from 'prop-types';
import {get} from 'lodash';
import { SHELVES, getBookStyle } from '../utils';
import Select from './Select';

const SELECT_HINT = 'Move to...';
const optionsToSelect = [...SHELVES, { value: 'null', label: 'None' }];

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.handleBookOptionChange = this.handleBookOptionChange.bind(this);
    }

    handleBookOptionChange(newOption) {
        const { book, onOptionChanged } = this.props;
        onOptionChanged(book, newOption);
    }

    render() {
        const { book, shelf } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={getBookStyle(get(book, 'imageLinks.smallThumbnail', ''))}></div>
                    <div className="book-shelf-changer">
                        <Select
                            options={optionsToSelect}
                            onChange={this.handleBookOptionChange}
                            placeholder={SELECT_HINT}
                            value={shelf}
                        />
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
            </div>
        )
    }
}
Book.propTypes = {
    book: object.isRequired,
    shelf: string.isRequired,
    onOptionChanged: func.isRequired
};

export default Book;
