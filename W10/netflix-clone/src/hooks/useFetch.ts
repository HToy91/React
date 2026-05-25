import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

interface UseFetchReturn<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

function useFetch<T>(url: string | null | undefined): UseFetchReturn<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!url) {
            setData(null);
            setError(null);
            setLoading(false);
            return;
        }

        const source = axios.CancelToken.source();
        let isMounted = true;

        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get<T>(url, { cancelToken: source.token });
                if (isMounted) {
                    setData(response.data);
                    setError(null);
                }
            } catch (err) {
                if (isMounted && !axios.isCancel(err)) {
                    const errorMessage = err instanceof AxiosError
                        ? err.message
                        : `An error has occurred: ${err}`;
                    setError(errorMessage);
                    setData(null);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        void fetchData();

        return () => {
            isMounted = false;
            source.cancel();
        };
    }, [url]);

    return { data, loading, error };
}

export default useFetch;