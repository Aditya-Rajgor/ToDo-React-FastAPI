import {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import LogoutButton from "./components/UI/Logout";
import GetAllList from "./components/GetAllList";
import AuthComponent from "./components/UI/AuthComponent";
const App = () => {
    const [token, setToken] = useState(null);
    const [tokenExpired, setTokenExpired] = useState(null);

    useEffect(() => {
        // Check if there is a token in session storage
        const sessionToken = sessionStorage.getItem("token");
        if (sessionToken) {
            setToken(sessionToken);
            console.log(isTokenExpired(sessionToken));
            if (isTokenExpired) {
                setTokenExpired(true);
            }
        } else {
            setTokenExpired(false);
        }
    }, []);

    const isTokenExpired = (token) => {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        console.log(decodedToken);
        return decodedToken.exp * 1000 < Date.now(); // Check if token is expired
    };

    const handleLogout = () => {
        // Remove the token from state
        setToken(null);
    };

    const handleLogin = (token) => {
        // Save the token to session storage
        sessionStorage.setItem("token", token);
        setToken(token);
    };

    return (
        <Router>
            {token && <LogoutButton onLogout={handleLogout} />}
            <Routes>
                <Route
                    path="/"
                    element={
                        // console.log("token found!!")
                        token && tokenExpired ? (
                            <Navigate to="/todo" />
                        ) : (
                            <AuthComponent
                                handleLogin={handleLogin}
                            ></AuthComponent>
                        )
                    }
                />
                <Route
                    path="/todo"
                    element={
                        token ? (
                            <GetAllList token={token} />
                        ) : (
                            <Navigate to="/" />
                        )
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
