import { useState, useEffect } from 'react';
import { getUser } from '@/endpoints/getBackend';

function useUser() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getUser();
                if (data) {
                    setUser(data); 
                } else {
                    setError("Failed to fetch user data");
                }
            } catch (err) {
                setError("Failed to fetch user");
                console.error("Error in fetchUser:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, loading, error };
}

export default useUser;
