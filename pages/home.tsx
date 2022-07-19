import { useEffect } from "react";
import jwt from "jsonwebtoken";

const Home = () => {

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const user = jwt.decode(token);
            if (!user) {
                console.log("no user")
                localStorage.removeItem("token");
                window.location.href = "/";
            } else {
                console.log("correct");
            }
        }
    }, []);

    return(
        <h1>Home page</h1>
    );
};

export default Home;