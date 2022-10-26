import { useEffect, useState } from "react";
import axios from "axios";
import BUILD_PARAMS from "../utils/build";


const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`${BUILD_PARAMS.DEFAULT_WEBAPI_URL}${url}`);
                setData(res.data)
            } catch (error) {
                setError(error)
            }
            setLoading(false)
        };
        fetchData()
    }, [url]);

    const reFetch = async () => {
        setLoading(true)
        try {
            const res = await axios.get(url);
            setData(res.data)
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    };
    
    return { data, loading, error, reFetch }
}

export default useFetch;


        