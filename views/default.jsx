const React = require("react");
const currentYear = new Date().getFullYear();

function Def(html) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Title</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/places">
                      PLACES
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/places/new">
                      ADD PLACE
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {html.children}
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <a
                href="https://www.linkedin.com/in/dalton-tewanger-a8a12b96"
                className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
              >
                <img
                  src="/images/linkedin.svg"
                  width="50"
                  height="50"
                  alt="LinkedIn Logo"
                />
              </a>
              <span className="text-muted">
                © 2023-{currentYear} Dalton Tewanger
              </span>
            </div>

            {/* Placeholder for other handles
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a className="text-muted" href="#">
                  <svg className="bi" width="24" height="24"></svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-muted" href="#">
                  <svg className="bi" width="24" height="24"></svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-muted" href="#">
                  <svg className="bi" width="24" height="24"></svg>
                </a>
              </li>
            </ul> */}

          </footer>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}

module.exports = Def;
