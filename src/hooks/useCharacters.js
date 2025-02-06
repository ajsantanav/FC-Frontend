import { useState, useEffect } from 'react';
import { getCharacter } from '@/endpoints/getBackend';

function useCharacter() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await getCharacter();
                if (data) {
                    setCharacters(data);
                } else {
                    setError("Failed to fetch characters or no characters found");
                }
            } catch (err) {
                setError("Failed to fetch characters");
                console.error("Error in fetchCharacters:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    return { characters, loading, error };
}

export default useCharacter;

