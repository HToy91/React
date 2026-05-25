import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = <T,>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (err) {
                setError(`An error has occurred: ${err}`);
            } finally {
                setLoading(false);
            }
        }
        void fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;