import {useEffect, useState} from "react";
import Login from "./Login";
import Register from "./Register";

const AuthComponent = ({handleLogin}) => {
    const [showLogin, setShowLogin] = useState(true); // State to toggle between Login and Register

    const toggleForm = () => {
        setShowLogin(!showLogin); // Toggles between true (Login) and false (Register)
    };

    return (
        <div className="m-4">
            {/* Buttons to toggle between Login and Register */}
            <div className="flex justify-center mb-6">
                <button
                    className={`px-4 py-2 mr-2 text-2xl font-bold rounded-lg ${
                        showLogin
                            ? " bg-purple-500 text-white"
                            : "bg-gray-300 text-black"
                    }`}
                    onClick={() => setShowLogin(true)}
                >
                    Login
                </button>
                <button
                    className={`px-4 py-2 text-2xl font-bold rounded-lg ${
                        !showLogin
                            ? " bg-purple-500 text-white"
                            : "bg-gray-300 text-black"
                    }`}
                    onClick={() => setShowLogin(false)}
                >
                    Register
                </button>
            </div>

            {/* Conditional rendering based on `showLogin` state */}
            {showLogin ? <Login onLogin={handleLogin} /> : <Register />}
        </div>
    );
};

export default AuthComponent;
