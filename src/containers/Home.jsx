import React from 'react'
import { SAMPLE_BOOKS } from '../config'
import BookShelf from '../components/BookShelf'
import { Link } from 'react-router-dom'

class Home extends React.Component {

    handleBookOptionChanged = (book, option) => {
        console.log(book, option)
    };

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf shelf={{ books: SAMPLE_BOOKS, title: 'Currently Reading' }} onBookOptionChanged={this.handleBookOptionChanged} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search" >Add a book</Link>
                </div>
            </div>
        );
    }
}

export default Home;
