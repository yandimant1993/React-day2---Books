import { BookPreview } from "./BookPreview.jsx";

export function BookList({ books, onRemoveBook,handleSetBook }) {

    return (
        <ul className="book-list container">
            {books.map(book => (
                <li key={book.id}>
                    <BookPreview book={book} />
                    <section>
                        <button onClick={() => onRemoveBook(book.id)}>Remove</button>
                        <button onClick={() => handleSetBook(book)}>Details</button>
                    </section>
                </li>
            ))}
        </ul>
    )
}