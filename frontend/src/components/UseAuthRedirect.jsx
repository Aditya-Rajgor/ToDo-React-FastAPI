import {useEffect} from "react";

const useAuthRedirect = (token) => {
    // const navigate = useNavigate();

    useEffect(() => {
        if (!token || isTokenExpired(token)) {
            const decodedToken = JSON.parse(atob(token.split(".")[1]));
            console.log(decodedToken);
            // navigate("/"); // Redirect to login page
        }
    }, [token, navigate]);

    const isTokenExpired = (token) => {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        console.log(decodedToken);
        return decodedToken.exp * 1000 < Date.now(); // Check if token is expired
    };
};

export default useAuthRedirect;
