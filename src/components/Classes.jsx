import React from 'react';

function Classes({ classes }) {
    return (
      <div className="classes-container">
        <h2>Classes</h2>
        <ul>
          {classes.length > 0 ? (
            classes.map((classes) => <li key={classes.index}>{classes.name}</li>)
          ) : (
            <p>No classes available.</p>
          )}
        </ul>
      </div>
    );
  }

export default Classes;
