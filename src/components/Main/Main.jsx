import "./Main.css";

function Main({ onAddBook }) {
  return (
    <main className="main">
      <div className="main__container">
        <div className="main__content">
          <span className="main__ornament" aria-hidden="true">
            ❧
          </span>

          <p className="main__eyebrow">
            MY LITTLE LIBRARY
          </p>

          <h2 className="main__title">
            Начни пополнять
            <br />
            <span>свою библиотеку</span>
          </h2>

          <p className="main__description">
            Сохраняй прочитанное, записывай впечатления
            <br className="main__desktop-break" />
            и собирай свою маленькую библиотеку.
          </p>

          <button
            className="main__button"
            type="button"
            onClick={onAddBook}
          >
            <span aria-hidden="true">＋</span>
            Добавить книгу
          </button>

          <p className="main__caption">
            ТВОЯ ИСТОРИЯ НАЧИНАЕТСЯ ЗДЕСЬ
          </p>
        </div>
      </div>
    </main>
  );
}

export default Main;