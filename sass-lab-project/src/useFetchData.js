import { useEffect, useState } from "react";

function useFetchData(url) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            const resJSON = await res.json();
            console.log("DATA", resJSON);
            setData(resJSON);
        }catch(error){
            setError(error);
        } finally{
            setIsLoading(false);
        }
        
    }

    useEffect(()=>{
        fetchData();
    },[])

    return {data,isLoading,error};
}

export default useFetchData;