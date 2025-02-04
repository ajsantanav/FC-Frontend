import { useState, useEffect } from 'react';
import { getClasses } from '@/endpoints/getDndInfo';

function useClasses() {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const data = await getClasses();
                setClasses(data.classes); // Ensure this matches what `getMonsters` returns
            } catch (err) {
                setError("Failed to fetch classes");
            } finally {
                setLoading(false);
            }
        };

        fetchClasses();
    }, []);

    return { classes, loading, error };
}

export default useClasses;
