import "./Navigation.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { paths } from "../../utils/config";

const Navigation = ({ loggedIn, isMenuOpen, handleCloseMenu }) => {
  const location = useLocation();

  let navigationClassName = 'navigation ';
  if (loggedIn) navigationClassName += 'navigation_hidden navigation_logged-in';
  if (isMenuOpen) navigationClassName += 'navigation_hidden navigation_opened';

  const links = !loggedIn ? (
    <>
      <Link className="navigation__link navigation__link_signup" to={paths.signUp}>Регистрация</Link>
      <Link className="navigation__link navigation__link_signin" to={paths.signIn}>Войти</Link>
    </>
  ) : (
    <>
      {isMenuOpen &&
        <Link
          className={`navigation__link ${location.pathname === paths.main && 'navigation__link_active'}`}
          to={paths.main}>
          Главная
        </Link>}
      <div className="navigation__links">
        <Link
          className={`navigation__link ${location.pathname === paths.movies && 'navigation__link_active'}`}
          to={paths.movies}>
          Фильмы
        </Link>
        <Link className={`navigation__link navigation__link_saved-movies ${location.pathname === paths.savedMovies && 'navigation__link_active'}`}
          to={paths.savedMovies}>
          Сохраненные фильмы
        </Link>
      </div>
      <Link className={`navigation__link navigation__link_profile ${location.pathname === paths.profile && 'navigation__link_active'}`}
        to={paths.profile}>
        Аккаунт
      </Link>
    </>
  )
  return (
    <nav className={navigationClassName} onClick={handleCloseMenu}>
      {links}
    </nav >
  )
}
export default Navigation