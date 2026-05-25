import { useEffect, useState } from "react";
import axios from "axios";

interface UseFetchReturn<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

function useFetch<T>(url: string): UseFetchReturn<T> {

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const fetchData = async () => {

            try {
                setLoading(true);
                setError(null);

                const response = await axios.get<T>(url);

                setData(response.data);

            } catch (err) {
                setError(`An error occurred: ${err}`);
                setData(null);

            } finally {
                setLoading(false);
            }
        };

        void fetchData();

    }, [url]);

    return { data, loading, error };
}

export default useFetch;