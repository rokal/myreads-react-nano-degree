import React from 'react';
import { Link } from 'react-router-dom';
import { keyBy, values, filter } from 'lodash';
import { Dimmer, Loader } from 'semantic-ui-react';
import { SHELVES } from '../utils';
import BookShelf from '../components/BookShelf';
import { getAll, update } from '../BooksAPI';

const getBooks = (booksById, shelf) => {
    return filter(values(booksById), book => book.shelf === shelf);
};

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            booksById: {},
            isLoading: false
        };
        this.handleBookOptionChanged = this.handleBookOptionChanged.bind(this);
        this.toggleLoader = this.toggleLoader.bind(this);
    }

    toggleLoader() {
        this.setState({ isLoading: !this.state.isLoading });
    }

    handleBookOptionChanged(book, option) {
        this.toggleLoader();
        update(book, option).then(() => {
            this.toggleLoader();
            const updatedBooksById = { ...this.state.booksById };
            updatedBooksById[book.id] = { ...book, shelf: option };
            this.setState({ booksById: updatedBooksById });
        })
    }

    componentDidMount() {
        this.toggleLoader();
        getAll().then(res => {
            this.toggleLoader();
            this.setState({ booksById: keyBy(res, book => book.id) });
        });
    }

    render() {
        const { isLoading } = this.state;
        return (
            <div className="list-books">
                <Dimmer active={isLoading} page>
                    <Loader>Loading</Loader>
                </Dimmer>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {
                        SHELVES.map((shelf, index) => {
                            const bookShelves = getBooks(this.state.booksById, shelf.value)
                            return <div key={index}><BookShelf shelf={{ books: bookShelves, title: shelf.label, value: shelf.value }} onBookOptionChanged={this.handleBookOptionChanged} /></div>
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
