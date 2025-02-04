import { React, useState, useEffect } from 'react';
import { getRaces } from '@/endpoints/getDndInfo';

function useRaces() {
    const [races, setRaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const fetchRaces = async () => {
            
        }
    })
    return (
    <div>useRaces</div>
  )
}

export default useRaces