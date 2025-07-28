import { BookFilter } from "../cmps/BookFilter.jsx"
import { BookList } from "../cmps/BookList.jsx"
import { bookService } from "../services/book.service.js"
import { BookDetails } from "../cmps/BookDetails.jsx"

const { useState, useEffect } = React

export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [myBook, onSetBook] = useState(null)
    // const [error, setError] = useState('')
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    console.log(books)
    useEffect(() => {
        loadBooks()
    }, [filterBy])


    function loadBooks() {
        bookService.query(filterBy)
            .then(books => setBooks(books))
            .catch(err => console.log('err:', err))
    }

    function handleSetBook(book) {
        onSetBook(book)
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId)
            .then(() => (
                setBooks(books => books.filter(book => book.id !== bookId))
            ))
            .catch(err => console.log('err:', err))
    }

    function handleSetFilter(newFilterBy) {
        setFilterBy({ ...newFilterBy })
    }
    // console.log('Render');

    if (!books) return <div>Loading...</div>
    return (
        <section className="book-index">
            {/* <h1>hi</h1> */}
            myBook ?
            {myBook && <BookDetails book={myBook} onClose={() => onSetBook(null)} />}
            :
            <React.Fragment>
                <BookFilter handleSetFilter={handleSetFilter} defaultFilter={filterBy} />
                <BookList onRemoveBook={onRemoveBook} books={books} handleSetBook={handleSetBook} />
            </React.Fragment>



            {/* {!error && <CarList onRemoveCar={onRemoveCar} cars={cars} />}
            {error && <p>{error}</p>} */}

            </section>
        
    )

}