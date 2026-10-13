import "./BookCard.css";

function BookCard({ book }) {
  return (
    <article className="book-card">
      <div className="book-card__cover">
        {book.image ? (
          <img
            className="book-card__image"
            src={book.image}
            alt={`Обложка книги «${book.title}»`}
          />
        ) : (
          <span className="book-card__placeholder">
            MUSE
          </span>
        )}
      </div>

      <div className="book-card__content">
        <span className="book-card__status">
          {book.status}
        </span>

        <h3 className="book-card__title">
          {book.title}
        </h3>

        <p className="book-card__author">
          {book.author}
        </p>
      </div>
    </article>
  );
}

export default BookCard;