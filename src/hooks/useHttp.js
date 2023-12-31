import { useState, useCallback } from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(
      async (url, method = 'GET', body = null) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(url, {
                method: method,
                body: body ? JSON.stringify(body) : null,
                headers: body ? {'Content-Type' : 'application/json'} : {},
            });

            if(!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            setData(data);
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
        }, []
      );

    return {isLoading, data, error, sendRequest};
}
export default useHttp