import React from 'react';

function Races({ races }) {
  return (
    <div className="races-container">
      <h2>Races</h2>
      <div className="card-container">
        {races.length > 0 ? (
          races.map((race) => (
            <div className="race-card" key={race.index}>
              <h3>{race.name}</h3>
              <img
                src={`/src/assets/images/${race.name}.png`}
                alt={race.name}
                className="race-image"
                onError={(e) => e.target.style.display = 'none'}
              />
              <p><strong>Size:</strong> {race.size}</p>
              <p><strong>Languages:</strong> {Array.isArray(race.languages) ? race.languages.join(", ") : race.languages}</p>
            </div>
          ))
        ) : (
          <p>No races available.</p>
        )}
      </div>
    </div>
  );
}

export default Races;
