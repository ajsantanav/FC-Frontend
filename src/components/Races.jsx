import React from 'react';

function Races({ races }) {
  return (
    <div className="races-container">
      <h2>Races</h2>
      <ul>
        {races.length > 0 ? (
          races.map((race) => <li key={race.index}>{race.name}</li>)
        ) : (
          <p>No races available.</p>
        )}
      </ul>
    </div>
  );
}

export default Races;
