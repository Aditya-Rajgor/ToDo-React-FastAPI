import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Reset the error
        setSuccessMessage("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return; // Stop submission if passwords don't match
        }
        try {
            await axios.post("http://localhost:8000/register", {
                username,
                password,
            });
            setSuccessMessage("User created successfully!");
            // navigate("/");
            // Clear the form fields after successful registration
            setUsername("");
            setPassword("");
            setConfirmPassword("");
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    return (
        <div className="m-4">
            <h1 className="mb-6 text-center font-mono text-3xl font-bold">
                Register
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
                <div className="mb-4">
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
                <div className="mb-6">
                    <label
                        htmlFor="confirmPassword"
                        className="mb-2 block text-xl"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full rounded-lg p-2 text-black"
                        placeholder="Confirm your password"
                        required
                    />
                </div>
                {error && (
                    <div className="mb-4 rounded-lg bg-red-100 p-4 text-red-700 border border-red-400">
                        {error}
                    </div>
                )}
                {/* Display success message */}
                {successMessage && (
                    <div className="mb-4 rounded-lg bg-green-100 p-4 text-green-700 border border-green-400">
                        {successMessage}
                    </div>
                )}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="rounded-lg bg-blue-500 px-4 py-2 text-2xl font-bold hover:bg-blue-600"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
