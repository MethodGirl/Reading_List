import "./Hero.css";

function Hero({ onAddBook }) {
  return (
    <section className="hero">
      <div className="hero__container">
        <p className="hero__eyebrow">
          MUSE — YOUR READING JOURNAL
        </p>

        <h1 className="hero__title">
          Книги всегда
          <br />
          <span>в моде.</span>
        </h1>

        <p className="hero__description">
          Маленькие миры между страницами.
        </p>

        <button
          className="hero__button"
          type="button"
          onClick={onAddBook}
        >
          <span aria-hidden="true">＋</span>
          Добавить книгу
        </button>
      </div>

      <div className="hero__books" aria-hidden="true">
        <span className="hero__book hero__book--one">✦</span>
        <span className="hero__book hero__book--two">M</span>
        <span className="hero__book hero__book--three">✧</span>
        <span className="hero__book hero__book--four">M</span>
        <span className="hero__book hero__book--five">✦</span>
        <span className="hero__page hero__page--one">❧</span>
        <span className="hero__page hero__page--two">❧</span>
      </div>
    </section>
  );
}

export default Hero;