const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place, i) => {
        return (
            <div key={i}>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name} />
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = index