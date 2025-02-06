import React from 'react';

function Classes({ classes }) {
  return (
    <div className="races-container">
      <h2>Classes</h2>
      <div className="card-container">
        {classes.length > 0 ? (
          classes.map((cls) => (
            <div className="race-card" key={cls.index}>
              <h3>{cls.name}</h3>
              <img
                src={`./src/assets/images/${cls.name}.png`}
                alt={cls.name}
                className="race-image"
                onError={(e) => e.target.style.display = 'none'}
              />
              <p><strong>Sub-classes:</strong></p>
              <ul>
                {Array.isArray(cls.subclasses) ? (
                  cls.subclasses.map((sub, idx) => <li key={idx}>{sub}</li>)
                ) : (
                  <li>{cls.subclasses}</li>
                )}
              </ul>
            </div>
          ))
        ) : (
          <p>No classes available.</p>
        )}
      </div>
    </div>
  );
}

export default Classes;




