import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const useData= () => {
    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch();

    const fetchData = async =()=>{
        setLoading(true);
        try{
            const response = await axios.get(
                ''
            );
            dispatch(setTaskList(response.data as Task[]));
        }catch{
            console.error('Sometthing went wrong');
        }finally{
            setLoading(false);
        }
    };
    useEffect(()=>{
        fetchData();
    },[]);
    return {loading};
};
export default useData;