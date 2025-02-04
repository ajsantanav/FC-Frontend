import React from 'react';
import useRaces from './hooks/useRaces';
import Races from './components/Races';

function App() {
  const { races, loading, error } = useRaces(); // Destructure correctly

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>D&D Races</h1>
      <Races races={races} /> {/* Pass races as a prop */}
    </div>
  );
}

export default App;
