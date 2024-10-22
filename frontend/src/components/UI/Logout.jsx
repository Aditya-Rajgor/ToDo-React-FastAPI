import React from "react";
import {useNavigate} from "react-router-dom";

const LogoutButton = ({onLogout}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the token from local storage
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        console.log("logout called");
        // Call the onLogout function to update the state
        onLogout();
        // Redirect to the login page
        navigate("/");
    };

    return (
        <div className="text-center mt-10">
            <button
                onClick={handleLogout}
                className="bg-purple-500 text-2xl font-mono text-white px-8 py-4 rounded-lg"
            >
                Logout
            </button>
        </div>
    );
};

export default LogoutButton;
