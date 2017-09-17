import React from 'react'
import { SHELVES } from '../config'
import BookShelf from '../components/BookShelf'
import { Link } from 'react-router-dom'
import { getAll } from '../BooksAPI'
import { get } from 'lodash'

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            shelfBooks: {}
        }
    }

    handleBookOptionChanged = (book, option) => {
        console.log(book, option)
    };

    componentDidMount = () => {
        getAll().then(res => {
            const bookState = {}
            SHELVES.forEach(shelf => {
                bookState[shelf.value] = this.getBooks(res, shelf.value)
            })
            this.setState({ shelfBooks: bookState })
        })
    }

    getBooks = (books, shelf) => {
        return books.filter(book => book.shelf === shelf)
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    {
                        SHELVES.map((shelf, index) => {
                            const bookShelves = get(this.state, `shelfBooks.${shelf.value}`, [])
                            return <div key={index}><BookShelf shelf={{ books: bookShelves, title: shelf.label }} onBookOptionChanged={this.handleBookOptionChanged} /></div>
                        })
                    }
                </div>
                <div className="open-search">
                    <Link to="/search" >Add a book</Link>
                </div>
            </div>
        );
    }
}

export default Home;
