import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../UI/logo/logo.png";
import SimpleInput from "../../UI/input/simpleInput";
import styles from "../../../styles/components/main/welcomePage.module.css";
import SubmitButton from "../../UI/button/submitButton";

const LoginPage = ({ signUpPageHandler, saveTokenHandler }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState({user: null, status: false, token: ""});
    const [login, setLogin] = useState(false);

    useEffect(() => {
        const item = localStorage.getItem("token")
      }, [])

      if (typeof window !== 'undefined') {
        const userAuthenticated = () => {
            axios.get("http://localhost:4000/isUserAuth", {
                headers: {
                    "x-access-token": localStorage.getItem("token")
                }
            }).then((res) => {
                console.log(res);
            });
        };

        console.log(userAuthenticated());
      }




    const onSubmitHandler = (event) => {
        event.preventDefault();
        const logining = {
            username: username,
            password: password,
        };
        axios.post("http://localhost:4000/login", logining)
            .then(res => {
                if (res.data.status) {
                    localStorage.setItem("token", res.data.token);
                    setLogin(true)
                } else {
                    setLogin(false);
                }
            });
    };

    saveTokenHandler(data.token);

    return (
        <form className={ styles.loginContainer } onSubmit={ onSubmitHandler }>
            <img src={ logo.src } />
            <h2>Welcome to the <br /> Volunteer Management System</h2>
            <p className={ styles.inputTag }>Username</p>
            <SimpleInput type={ "" } value={ username } onChange={ (event) => setUsername(event.target.value) } />
            <p className={ styles.inputTag }>Password</p>
            <SimpleInput type={ "password" } value={ password } onChange={ (event) => setPassword(event.target.value) } />
            <SubmitButton className={ styles.button } value="Login" />
            <a onClick={ signUpPageHandler }>Register</a>
        </form>
    );
};

export default LoginPage;