const React = require("react");

function Def(html) {
  return (
    <html>
      <head>
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
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">HOME</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/places">PLACES</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/places/new">ADD PLACE</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {html.children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}

module.exports = Def;
