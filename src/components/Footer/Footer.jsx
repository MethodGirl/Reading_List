import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a className="footer__logo" href="/">
          <span className="footer__logo-name">MUSE</span>
          <span className="footer__logo-caption">
            YOUR READING JOURNAL
          </span>
        </a>

        <p className="footer__note">
          Made for the love of books
        </p>

        <span className="footer__year">
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}

export default Footer;