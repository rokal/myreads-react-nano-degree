import React from 'react'
import { Link } from 'react-router-dom'
import { trim, get, isEmpty, map } from 'lodash'
import { search, getAll, update } from '../BooksAPI'
import Book from '../components/Book'
import { Loader } from 'semantic-ui-react'

class SearchPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            bookShelfById: {},
            isLoading: false
        };
        this.onBoookOptions = this.onBookOptionChanged.bind(this);
        this.search = this.search.bind(this);
        this.onBookOptionChanged = this.onBookOptionChanged.bind(this);
        this.toggleLoader = this.toggleLoader.bind(this);
    }

    toggleLoader() {
        this.setState({ isLoading: !this.state.isLoading });
    }

    onBookOptionChanged(book, option) {
        this.toggleLoader();
        update(book, option).then(() => {
            const newBooksById = { ...this.state.bookShelfById };
            newBooksById[book.id] = option;
            this.setState({ bookShelfById: newBooksById });
            this.toggleLoader();
        });
    }

    componentDidMount() {
        getAll().then(res => {
            const reducedBooks = {};
            res.forEach(book => {
                reducedBooks[book.id] = book.shelf;
            })
            this.setState({ bookShelfById: reducedBooks });
        });
    }

    search(event) {
        const input = event.target.value;
        const trimedQuery = trim(input);
        if (trimedQuery !== '') {
            this.toggleLoader();
            search(trimedQuery).then(result => {
                if (!result.error) {
                    this.setState({ books: result });
                } else {
                    this.setState({ books: [] });
                }
                this.toggleLoader();
            });
        }
    }

    render() {
        const { books, bookShelfById, isLoading } = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/"> Close </Link>
                    <div className="search-books-input-wrapper">
                        <input value={this.state.keyword} type="text" placeholder="Search by title or author" onKeyUp={this.search} />
                    </div>
                </div>
                <div className="search-books-results">
                    <Loader active={isLoading} />
                    <ol className="books-grid">
                        {
                            !isEmpty(books) &&
                            map(books, (book) => <li key={book.id}><Book shelf={get(bookShelfById, book.id, 'null')} book={book} onOptionChanged={this.onBookOptionChanged} /></li>)
                        }
                        {
                            isEmpty(books) && (
                                <h2>
                                    No result to show
                                </h2>
                            )
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchPage;
