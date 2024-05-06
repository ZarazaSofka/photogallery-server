import { Link } from "react-router-dom";
import { isAuthenticated, hasRole } from "../auth";

const Header = ({ user }) => (
  <header>
    <Link id="logo-ref" to="/">
      <h1>qPhoto</h1>
    </Link>
    <nav className="menu" id="menu">
      <Link to="/photo">Галерея</Link>
      {isAuthenticated(user) && <Link to="/profile">Профиль</Link>}
      {hasRole(user, "ROLE_ADMIN") && <Link to="/support">Поддержка</Link>}
      {!isAuthenticated(user) && <Link to="/login">Войти</Link>}
      {isAuthenticated(user) && <Link to="/logout">Выйти</Link>}
    </nav>
    <div className="dropdown-menu-container">
      <div className="activator" id="activator" />
      <nav className="dropdown-menu" id="dropdown-menu">
        <Link to="/photo">Галерея</Link>
        {isAuthenticated(user) && <Link to="/profile">Профиль</Link>}
        {hasRole(user, "ROLE_ADMIN") && <Link to="/support">Поддержка</Link>}
        {!isAuthenticated(user) && <Link to="/login">Войти</Link>}
        {isAuthenticated(user) && <Link to="/logout">Выйти</Link>}
      </nav>
    </div>
  </header>
);

export default Header;
