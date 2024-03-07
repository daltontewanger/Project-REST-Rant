const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main className="container">
        <div className="row">
          <div className="col-md">
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry we can't find this page!</p>
            <img
              className="img-fluid"
              src="/images/404oops.jpg"
              alt="Spilled Ice Cream Cone"
            />
            <div>
              Photo by
              <a href="https://unsplash.com/@rojekilian?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Sarah Kilian
              </a>
              on
              <a href="https://unsplash.com/photos/brown-ice-cream-cone-52jRtc2S_VE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Unsplash
              </a>
            </div>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
