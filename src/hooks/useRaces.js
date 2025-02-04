import { React, useState, useEffect } from 'react';
import { getRaces } from '@/endpoints/getDndInfo';

function useRaces() {
    const [races, setRaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const fetchRaces = async () => {
            const {races} = await getRaces();
            setRaces()
        };

        fetchRaces()
    }, []);

    return { races, loading, error }
}

export default useRaces