import {useState} from "react";
import axios from "axios";

const baseUrl = "http://localhost:3000/";

const usePost = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const postData = async (newData: {userId: number; title: string, body: string}) => {
        setLoading(true);
        setError("");

        try {
            const response = await axios.post(`${baseUrl}${url}`, newData)
            setData(response.data);
        } catch (error) {
            setError(`An error occurred: ${error}`);
        } finally {
            setLoading(false);
        }
    }
    return {data, loading, error, postData};
}

export default usePost;