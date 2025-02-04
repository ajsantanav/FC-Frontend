import React from 'react';
import useRaces from './hooks/useRaces';
import useMonsters from './hooks/useMonster';
import useClasses from './hooks/useClasses';
import Races from './components/Races';
import Monsters from './components/Monsters'
import Classes from './components/Classes';

function App() {
  const { races, loading: racesLoading, error: racesError } = useRaces();
  const { monsters, loading: monstersLoading, error: monstersError } = useMonsters();
  const { classes, loading: classesLoading, error: classesError } = useClasses();
  if (racesLoading || monstersLoading || classesLoading) return <p>Loading...</p>;
  if (racesError) return <p>Error loading races: {racesError}</p>;
  if (monstersError) return <p>Error loading monsters: {monstersError}</p>;
  if (classesError) return <p>Error loading classes: {classesError}</p>;

  return (
    <div>
      <h1>D&D</h1>
      <Races races={races} /> {/* Pass races as a prop */}
      <Classes classes={classes} /> {/* Pass races as a prop */}

      {/* <Monsters monsters={monsters}/> */}
    </div>
  );
}

export default App;
