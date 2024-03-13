const React = require("react");
const Def = require("../default");

function index({ places }) {
  const placesFormatted = places.map((place) => {
    return (
      <div className="col-sm-6" key={place.id}>
        <h2>
          {place.name}
        </h2>
        <p className="text-left">{place.cuisines}</p>
        <a href={`/places/${place.id}`} >
        <img className="img-fluid rounded link-opaque" src={place.pic} alt={place.name} />
        </a>
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    );
  });
  return (
    <Def>
      <main className="container">
        <h1>Places to Rant or Rave About</h1>
        <div className="row">{placesFormatted}</div>
        <div>
          <a href="/places/new">
            <button className="btn btn-primary">Add a new place</button>
          </a>
        </div>
      </main>
    </Def>
  );
}

module.exports = index;
