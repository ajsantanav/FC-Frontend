import React from 'react';

function Monsters({ monsters }) {
    return (
      <div className="monsters-container">
        <h2>Monsters</h2>
        <ul>
          {monsters.length > 0 ? (
            monsters.map((monster) => <li key={monster.index}>{monster.name}</li>)
          ) : (
            <p>No monsters available.</p>
          )}
        </ul>
      </div>
    );
  }

export default Monsters;
