import { NavLink, Link } from "react-router-dom";

export default function NavBar() {



  const getNavLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";



  return (
    <div className="container-navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className={getNavLinkClass} to="/">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={getNavLinkClass} to="/AboutUs">Chi siamo</NavLink>
              </li>

              {/* Dropdown 1 */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Arredamento negozi
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/negozi/voce1">Voce 1</Link></li>
                  <li><Link className="dropdown-item" to="/negozi/voce2">Voce 2</Link></li>
                  <li><Link className="dropdown-item" to="/negozi/voce3">Voce 3</Link></li>
                  <li><Link className="dropdown-item" to="/negozi/voce4">Voce 4</Link></li>
                  <li><Link className="dropdown-item" to="/negozi/voce5">Voce 5</Link></li>
                </ul>
              </li>

              {/* Dropdown 2 */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Arredamento uffici
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/uffici/voce1">Voce 1</Link></li>
                  <li><Link className="dropdown-item" to="/uffici/voce2">Voce 2</Link></li>
                  <li><Link className="dropdown-item" to="/uffici/voce3">Voce 3</Link></li>
                  <li><Link className="dropdown-item" to="/uffici/voce4">Voce 4</Link></li>
                  <li><Link className="dropdown-item" to="/uffici/voce5">Voce 5</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink className={getNavLinkClass} to="/manichini-busti">Manichini e busti</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={getNavLinkClass} to="/vetrine-componibili">Vetrine componibili</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={getNavLinkClass} to="stender">Stender</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={getNavLinkClass} to="espositori-display">Espositori e display</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={getNavLinkClass} to="/grucce-personalizzate">Grucce personalizzate</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
