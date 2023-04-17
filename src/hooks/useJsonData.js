import { useState, useEffect } from 'react';
import axios from 'axios';

export async function getStaticProps() {
    const response = await axios.get('https://api.npoint.io/c0aa695f90022f632041');
    const jsonData = response.data;

    return {
        props: {
            jsonData,
        },
        revalidate: 3600, 
    };
}

export const useJsonData = () => {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await axios.get('https://api.npoint.io/c0aa695f90022f632041');
            setJsonData(data.data);
        }

        fetchData();
    }, []);

    return jsonData;
};
