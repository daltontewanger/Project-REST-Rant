const React = require("react");
const Def = require("../default");
const StateModel = require("../../models/places");
const states = StateModel.getStates();

function new_form({ message, place }) {
  if (message) {
    message = <h4 className="bg-danger d-flex justify-content-center align-items-center">{message}</h4>;
  }
  return (
    <Def>
      <main className="container p-4 bg-white shadow">
        <h1>Add a New Place</h1>
        {message}
        <form method="POST" action="/places">
          <div className="row">
            <div className="form-group col-sm-6 d-flex flex-column align-items-center">
              <label htmlFor="name">Place Name: </label>
              <input className="form-control" id="name" name="name" required defaultValue={place ? place.name : ''}/>
            </div>
            <div className="form-group col-sm-6 d-flex flex-column align-items-center">
              <label htmlFor="pic">Place Picture: </label>
              <input className="form-control" id="pic" name="pic" />
            </div>
            <div className="form-group col-sm-4 d-flex flex-column align-items-center">
              <label htmlFor="city">City: </label>
              <input className="form-control" id="city" name="city" defaultValue={place ? place.city : ''}/>
            </div>
            <div className="form-group col-sm-4 d-flex flex-column align-items-center">
              <label htmlFor="state">State: </label>
              <select className="form-control" id="state" name="state" defaultValue={place ? place.state : ''}>
                <option value="">Select a state</option>
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
                defaultValue={new Date().getFullYear()}
              />
            </div>
            <div className="form-group col-sm-12 d-flex flex-column align-items-center">
              <label htmlFor="cuisines">Cuisines: </label>
              <input
                className="form-control"
                id="cuisines"
                name="cuisines"
                required
                defaultValue={place ? place.cuisines : ''}
              />
            </div>
            <input
              className="btn btn-primary mt-2"
              type="submit"
              value="Add Place"
            />
          </div>
        </form>
      </main>
    </Def>
  );
}

module.exports = new_form;
