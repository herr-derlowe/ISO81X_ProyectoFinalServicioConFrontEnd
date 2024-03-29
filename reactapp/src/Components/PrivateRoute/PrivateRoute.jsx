import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export function PrivateRoute() {
    const [isAuth, setIsAuth] = useState(null);
    const token = sessionStorage.getItem("token");

    const navigate = useNavigate();

    const sendVerify = async () => {
        await axios
            .get("api/Authentication/verifyjwt/" + token)
            .then(res => {
                const data = res.data;
                if (data == true) {
                    setIsAuth(true);
                } else {
                    sessionStorage.removeItem("token");
                    sessionStorage.removeItem("username");
                    setIsAuth(false)
                }
            })
            .catch((err) => {
                navigate("/");
            });
    };

    useEffect(() => {
        sendVerify();
    }, []);

    if (!isAuth) {
        return (
            <div
                style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "3rem",
                    fontWeight: "600",
                }}
            >
                <h1>Loading (Please Login)...</h1>
            </div>
        );
    }

    return <Outlet />;
}
