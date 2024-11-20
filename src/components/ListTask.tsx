import React ,  {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { fetchTasks} from '../redux/taskSlice';
import {useDispatch, useSelector} from '../redux/store';


const ListTask = () => {
    const listtask = useSelector(selectTask);

    const { loading } = useData();
    if (loading) {
        return (
            <div className= 'flex flex-col grow min-w-[520px] items-center justify-center border rounded-xl mb-12'>
              <span className='text-xl p-6'>Loading</span>
            </div>
        );
    }
    return (
        <div className='flex flex-col grow min-w-[520px] item-center justify-center border rounded-xl mb-12'>
          {listtask.length ? <ScrollablleList tasks={listtask} /> : <NoTasks />}
        </div>
    );
};
export default ListTask;