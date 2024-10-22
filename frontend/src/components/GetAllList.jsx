import {useEffect, useState} from "react";
import {CardColumn} from "./UI/CardColumn";
import {
    DeleteOneToDoListServiceCall,
    GetAllUserToDoListServiceCall,
    CreateOneToDoListServiceCall,
    PutOneToDoListServiceCall,
    GetCurrentUsernameServiceCall,
} from "../../services/GetService";
import CreateCard from "./UI/CreateCard";

const GetAllList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getToDoLists().catch(console.error);
    }, []);

    const getToDoLists = async () => {
        const token = sessionStorage.getItem("token");
        const response = await GetAllUserToDoListServiceCall(token);
        setData(response);
    };

    const handleDeleteTask = async (id) => {
        DeleteOneToDoListServiceCall(id);
        setData(data.filter((item) => item.id !== id));
        // getToDoLists();
    };

    const handleCreate = async (newItem) => {
        const token = sessionStorage.getItem("token");
        const username = await GetCurrentUsernameServiceCall(token);
        newItem.user_id = username;
        // console.log(newItem);
        CreateOneToDoListServiceCall(newItem, token);
        getToDoLists();
    };

    const handleSave = async (id, updatedItem) => {
        const token = sessionStorage.getItem("token");
        const username = await GetCurrentUsernameServiceCall(token);
        updatedItem.user_id = username;
        await PutOneToDoListServiceCall(id, updatedItem);
        getToDoLists();
    };

    const handleEditTask = async (id, updatedItem) => {
        const token = sessionStorage.getItem("token");
        const username = await GetCurrentUsernameServiceCall(token);
        updatedItem.user_id = username;
        await PutOneToDoListServiceCall(id, updatedItem);
        getToDoLists();
    };

    return (
        <div>
            <CardColumn
                listData={data}
                onSave={handleSave}
                onDeleteTask={handleDeleteTask}
                onEditTask={handleEditTask}
                onCreateCard={handleCreate}
            />
        </div>
    );
};

export default GetAllList;
