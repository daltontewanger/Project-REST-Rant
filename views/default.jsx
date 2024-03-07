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
          <h3>
            <a href="/">HOME</a>
          </h3>
        </header>
        {html.children}
      </body>
    </html>
  );
}

module.exports = Def;
