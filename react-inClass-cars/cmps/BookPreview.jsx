export function BookPreview({ book }) {

    const { title, id, thumbnail } = book
    return (
        <article className="book-preview">
            <h2>title: {title}</h2>
            <h4>Book id: {id}</h4>
            <img src={thumbnail} alt="Book Image" />
        </article>
    )
}