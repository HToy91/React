import {useState} from "react";
import axios from "axios";
import * as url from "node:url";

const baseUrl = `${baseUrl}${url}`;

const usePost = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const postData = async (newData: {userId: number; title: string, body: string}) => {
        setLoading(true);
        setError("");

        try {
            const response = await axios.get(`${baseUrl}${url}`, newData)
            setData(response.data);
        } catch (error) {
            setError(`An error occurred: ${error}`);
        } finally {
            setLoading(false);
        }
    }
    return {data, loading, error, postData};
}