const React = require("react");
const Def = require("../default.jsx");

function edit_form(data) {
  // console.log("Data:", data);
  // console.log("ID:", id);
  return (
    <Def>
      <main className="container p-4 bg-white shadow">
        <h1>Edit Place</h1>
        <form method="POST" action={`/places/${data.id}?_method=PUT`}>
          <div className="row">
            <div className="form-group col-sm-6 d-flex flex-column align-items-center">
              <label className="text-center" htmlFor="name">
                Place Name
              </label>
              <input
                className="form-control"
                id="name"
                name="name"
                defaultValue={data.place.name}
                required
              />
            </div>
            <div className="form-group col-sm-6 d-flex flex-column align-items-center">
              <label htmlFor="pic">Place Picture</label>
              <input className="form-control" id="pic" name="pic" defaultValue={data.place.pic}/>
            </div>
            <div className="form-group col-sm-6 d-flex flex-column align-items-center">
              <label htmlFor="city">City</label>
              <input className="form-control" id="city" name="city" defaultValue={data.place.city}/>
            </div>
            <div className="form-group col-sm-6 d-flex flex-column align-items-center">
              <label htmlFor="state">State</label>
              <input className="form-control" id="state" name="state" defaultValue={data.place.state}/>
            </div>
            <div className="form-group col-sm-12 d-flex flex-column align-items-center">
              <label htmlFor="cuisines">Cuisines</label>
              <input
                className="form-control"
                id="cuisines"
                name="cuisines"
                defaultValue={data.place.cuisines}
                required
              />
            </div>
            <div className="form-group col-sm-12 d-flex justify-content-center mt-2">
              <input
                className="btn btn-primary"
                type="submit"
                value="Save Changes"
              />
            </div>
          </div>
        </form>
      </main>
    </Def>
  );
}

module.exports = edit_form;
