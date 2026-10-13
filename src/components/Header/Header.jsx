import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a className="header__logo" href="/">
          <span className="header__logo-name">MUSE</span>
          <span className="header__logo-caption">
            YOUR READING JOURNAL
          </span>
        </a>

        <div className="header__counter" aria-label="Количество книг">
          <span className="header__counter-icon">♧</span>
          <span>0 книг</span>
        </div>
      </div>
    </header>
  );
}

export default Header;