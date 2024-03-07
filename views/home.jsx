const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main className="container">
        <h1>REST-Rant</h1>
        <div className="row">
          <div className="col-sm">
            <img
              className="img-fluid"
              src="/images/strawberries.jpg"
              alt="Basket of Strawberries"
            />
            <div className="m-1">
              Photo by
              <a href="https://unsplash.com/@lacylucy">
                Lucinda Hershberger
              </a>{" "}
              on
              <a href="https://unsplash.com/photos/red-strawberries-on-wooden-surface-and-in-colandar-n6q7tVi-ocI">
                Unplash
              </a>
            </div>
          </div>
        </div>
        <a href="/places">
          <button className="btn btn-primary mb-1">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
