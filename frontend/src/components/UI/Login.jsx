import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = ({onLogin}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const response = await axios.post(
                "http://localhost:8000/token",
                {
                    username,
                    password,
                },
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );
            // if (!response.ok) {
            //     const errorData = await response.json();
            //     // console.error("Login failed:", errorData.response.data.detail);
            //     // throw new Error(errorData.detail); // Get error detail from FastAPI
            // }

            onLogin(response.data.access_token);
            navigate("/todo");
        } catch (error) {
            setError(error.response.data.detail);
            // console.error("Login failed:", error);
        }
    };

    return (
        <div className="m-4">
            <h1 className="mb-6 text-center font-mono text-3xl font-bold">
                Login
            </h1>
            <form
                onSubmit={handleSubmit}
                className="mx-auto max-w-md rounded-lg bg-purple-500 p-6 font-mono text-white"
            >
                <div className="mb-4">
                    <label htmlFor="username" className="mb-2 block text-xl">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full rounded-lg p-2 text-black"
                        placeholder="Enter your username"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="mb-2 block text-xl">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-lg p-2 text-black"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                {error && (
                    <div className="mb-4 rounded-lg bg-red-100 p-4 text-red-700 border border-red-400">
                        {error}
                    </div>
                )}
                {/* Display error message */}
                <div className="flex justify-center ">
                    <button
                        type="submit"
                        className="rounded-lg bg-blue-500 px-4 py-2 text-2xl font-bold hover:bg-blue-600"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
