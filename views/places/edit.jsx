const React = require("react");
const Def = require("../default.jsx");
const StateModel = require("../../models/places");
const states = StateModel.getStates();

function edit_form({ place }) {
  return (
    <Def>
      <main className="container p-4 bg-white shadow">
        <h1>Edit Place</h1>
        <form method="POST" action={`/places/${place.id}?_method=PUT`}>
          <div className="row">
            <div className="form-group col-sm-6 d-flex flex-column align-items-center">
              <label className="text-center" htmlFor="name">
                Place Name
              </label>
              <input
                className="form-control"
                id="name"
                name="name"
                defaultValue={place.name}
                required
              />
            </div>
            <div className="form-group col-sm-6 d-flex flex-column align-items-center">
              <label htmlFor="pic">Place Picture</label>
              <input className="form-control" id="pic" name="pic" defaultValue={place.pic}/>
            </div>
            <div className="form-group col-sm-4 d-flex flex-column align-items-center">
              <label htmlFor="city">City</label>
              <input className="form-control" id="city" name="city" defaultValue={place.city}/>
            </div>
            <div className="form-group col-sm-4 d-flex flex-column align-items-center">
              <label htmlFor="state">State</label>
              <select className="form-control" id="state" name="state">
                <option defaultValue={place.state}>{place.state}</option>
                {states.map((state) => (
                  <option key={state.abbreviation} value={state.abbreviation}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-sm-4 d-flex flex-column align-items-center">
              <label htmlFor="founded">Year Founded:</label>
              <input
                type="number"
                className="form-control"
                id="founded"
                name="founded"
                defaultValue={place.founded}
                min={1800}
                max={new Date().getFullYear()}
              />
            </div>
            <div className="form-group col-sm-12 d-flex flex-column align-items-center">
              <label htmlFor="cuisines">Cuisines</label>
              <input
                className="form-control"
                id="cuisines"
                name="cuisines"
                defaultValue={place.cuisines}
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
