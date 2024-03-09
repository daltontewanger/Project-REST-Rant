const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main className="container p-4 bg-white shadow">
        <div className="row">
          <div className="col-lg-6">
            <img
              src={data.place.pic}
              className="img-fluid rounded"
              alt={data.place.name}
            />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div className="text-center">
              <h1>{data.place.name}</h1>
            </div>
            <div className="text-center mt-4">
              <div className="rating">
                <h2>RATING</h2>
                <p>Not Rated</p>
              </div>
            </div>
            <div className="text-center mt-4">
              <h2>DESCRIPTION</h2>
              <p>
                Located in {data.place.city}, {data.place.state} and serving{" "}
                {data.place.cuisines}
              </p>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row text-center mt-4">
          <div className="col">
            <h2>COMMENTS</h2>
            <p>No Comments yet!</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="d-flex justify-content-between">
            <a
              href={`/places/${data.id}/edit`}
              className="btn btn-warning me-2"
            >
              Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
