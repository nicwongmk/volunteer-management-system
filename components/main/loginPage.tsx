import { SetStateAction, useState } from "react";
import axios from "axios";
import logo from "../UI/logo/logo.png";
import SimpleInput from "../UI/input/simpleInput";
import styles from "../../styles/components/main/welcomePage.module.css";
import SubmitButton from "../UI/button/submitButton";

const LoginPage = ({ signUpPageHandler }: any) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = (event: any) => {
        event.preventDefault();
    }

    return (
        <form className={ styles.loginContainer } onSubmit={ onSubmitHandler }>
            <img src={ logo.src } />
            <h2>Welcome to the <br /> Volunteer Management System</h2>
            <p className={ styles.inputTag }>Username</p>
            <SimpleInput type={ "" } value={ username } onChange={ (event: { target: { value: SetStateAction<string>; }; }) => setUsername(event.target.value) } />
            <p className={ styles.inputTag }>Password</p>
            <SimpleInput type={ "password" } value={ password } onChange={ (event: { target: { value: SetStateAction<string>; }; }) => setPassword(event.target.value) } />
            <SubmitButton className={ styles.button } value="Login" />
            <a onClick={ signUpPageHandler }>Register</a>
        </form>
    );
};

export default LoginPage;