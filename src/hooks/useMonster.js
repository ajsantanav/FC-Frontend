import { useState, useEffect } from 'react';
import { getMonsters } from '@/endpoints/getDndInfo';

function useMonsters() {
    const [monsters, setMonsters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMonsters = async () => {
            try {
                const data = await getMonsters();
                setMonsters(data.monsters); // Ensure this matches what `getMonsters` returns
            } catch (err) {
                setError("Failed to fetch monsters");
            } finally {
                setLoading(false);
            }
        };

        fetchMonsters();
    }, []);

    return { monsters, loading, error };
}

export default useMonsters;
