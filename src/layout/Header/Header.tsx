import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <img src={logo} alt="ССРЗ" className="header__logo-icon" />
          <span className="header__logo-text">ССРЗ</span>
        </Link>

        <nav className="header__nav">

          <Link to="/about" className="header__link">
            О нас
          </Link>
          <Link to="/opportunities" className="header__link">
            Наши возможности
          </Link>
          <Link to="/services" className="header__link">
            Услуги
          </Link>
          <Link to="/contacts" className="header__link">
            Контакты
          </Link>
          <a
            className="header__link"
            href="https://www.disclosure.ru/issuer/2531001535/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Раскрытие информации
          </a>

          <button
            type="button"
            className="header__menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Меню"
            aria-expanded={menuOpen}
          >
            <span className="header__menu-line" />
            <span className="header__menu-line" />
            <span className="header__menu-line" />
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div className="burger" role="dialog" aria-modal="true">
          <div
            className="burger__backdrop"
            onClick={() => setMenuOpen(false)}
          />

          <div className="burger__panel">
            <button
              type="button"
              className="burger__close"
              onClick={() => setMenuOpen(false)}
              aria-label="Закрыть меню"
            >
              ×
            </button>

            <div className="burger__nav">
              <Link to="/services" className="burger__item" onClick={closeMenu}>
                Услуги
              </Link>
              <Link
                to="/opportunities"
                className="burger__item"
                onClick={closeMenu}
              >
                Наши возможности
              </Link>
              <Link to="/about" className="burger__item" onClick={closeMenu}>
                О нас
              </Link>
              <Link to="/contacts" className="burger__item" onClick={closeMenu}>
                Контакты
              </Link>
            </div>

            <div className="burger__footer">текст</div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
