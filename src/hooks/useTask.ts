import { UseDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../redux/taskSlice";
import { useDispatch } from "react-redux";
const useTask = (id:number) =>{
    const dispatch = useDispatch();
    const onDelete = () => {
        dispatch(deleteTask(id));
    };

    const onToggle = () => {
        dispatch(toggleTask(id));
    }:
    return { onDelete , onToggle};

};

export default useTask;