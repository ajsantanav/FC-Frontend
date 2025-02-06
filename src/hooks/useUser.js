import { useState, useEffect } from 'react';
import { getUser } from '@/endpoints/getBackend';

function useUser() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getUser();
                setUsers(data); // Ensure this matches what `getRaces` returns
            } catch (err) {
                setError("Failed to fetch races");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { users, loading, error };
}

export default useUser;