import React from 'react'
import useRaces from '@/hooks/useRaces';
import useMonsters from '@/hooks/useMonster';
import useClasses from '@/hooks/useClasses';
import Races from '@/components/Races';
import Classes from '@/components/Classes';
import Collapsible from "@/components/Collapsible";

function Landing() {
    const { races, loading: racesLoading, error: racesError } = useRaces();
    const { classes, loading: classesLoading, error: classesError } = useClasses();
    if (racesLoading || classesLoading) return <p>Loading...</p>;
    if (racesError) return <p>Error loading races: {racesError}</p>;
    if (classesError) return <p>Error loading classes: {classesError}</p>;
  return (
        <div className='greatContainer'>
          <h1>D&D Companion</h1>
          <Collapsible label="Races">
            <Races races={races} /> {/* Pass races as a prop */}
          </Collapsible>
          <Collapsible label="Classes">
           <Classes classes={classes} /> {/* Pass races as a prop */}
          </Collapsible>
        </div>
  )
}

export default Landing