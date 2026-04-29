import {useEffect, useState} from "react";
import axios from "axios";

const baseUrl = "http://localhost:3000/";

const useFetch = (url: string)=> {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`${baseUrl}${url}`);

                await new Promise(resolve => setTimeout(resolve, 3000));

                setData(response.data);
            } catch (error) {
                setError(`An error occurred ${error}`);
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, [url]);

    return {data, loading, error};
}

export default useFetch;