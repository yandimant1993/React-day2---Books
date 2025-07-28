
export function BookDetails({ book, onClose }) {

    function evStop(ev) {
        ev.stopPropagation()
    }

    return (
        <section onClick={onClose} className="backdrop">
            <dialog onClick={evStop} className="watcher-details" open>
                <h2>{book.title}</h2>
                <h3>{book.subtitle}</h3>
                <p>{book.description}</p>
                <img src={book.thumbnail} />
                <button onClick={onClose}>Close</button>
            </dialog>
        </section>
    )
}