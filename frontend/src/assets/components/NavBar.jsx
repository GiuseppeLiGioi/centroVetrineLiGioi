export default function NavBar() {
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
                <a className="nav-link" href="#">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/AboutUs">Chi siamo</a>
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
                  <li><a className="dropdown-item" href="#">Voce 1</a></li>
                  <li><a className="dropdown-item" href="#">Voce 2</a></li>
                  <li><a className="dropdown-item" href="#">Voce 3</a></li>
                  <li><a className="dropdown-item" href="#">Voce 4</a></li>
                  <li><a className="dropdown-item" href="#">Voce 5</a></li>
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
                  <li><a className="dropdown-item" href="#">Voce 1</a></li>
                  <li><a className="dropdown-item" href="#">Voce 2</a></li>
                  <li><a className="dropdown-item" href="#">Voce 3</a></li>
                  <li><a className="dropdown-item" href="#">Voce 4</a></li>
                  <li><a className="dropdown-item" href="#">Voce 5</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Manichini e busti</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Vetrine componibili</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Stender</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Espositori e display</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Grucce personalizzate</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
