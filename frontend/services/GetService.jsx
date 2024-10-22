import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000",
});

export const GetCurrentUsernameServiceCall = async (token) => {
    try {
        const response = await api.get("/users/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response);
        return response.data.username;
    } catch (error) {
        console.error(error);
    }
};

export const GetAllToDoListServiceCall = async () => {
    try {
        const response = await api.get("/");
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const DeleteOneToDoListServiceCall = async (id) => {
    try {
        await api.delete(`/${id}`);
    } catch (error) {
        console.error(error);
    }
};

export const PutOneToDoListServiceCall = async (id, data) => {
    try {
        const response = await api.put(`/${id}`, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
export const CreateOneToDoListServiceCall = async (data, token) => {
    try {
        await api.post("/add-todo", data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        // return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const GetAllUserToDoListServiceCall = async (token) => {
    try {
        const response = await api.get("/get-todo", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
