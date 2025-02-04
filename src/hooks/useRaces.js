import { useState, useEffect } from 'react';
import { getRaces } from '@/endpoints/getDndInfo';

function useRaces() {
    const [races, setRaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRaces = async () => {
            try {
                const data = await getRaces();
                setRaces(data.races); // Ensure this matches what `getRaces` returns
            } catch (err) {
                setError("Failed to fetch races");
            } finally {
                setLoading(false);
            }
        };

        fetchRaces();
    }, []);

    return { races, loading, error };
}

export default useRaces;
