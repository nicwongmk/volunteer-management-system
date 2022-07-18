import { SetStateAction, useState } from "react";
import axios from "axios";
import SimpleInput from "../UI/input/simpleInput";
import SubmitButton from "../UI/button/submitButton";
import RegisteredPage from "./registeredPage";
import styles from "../../styles/components/main/welcomePage.module.css";


const SignUpPage = ({ loginPageHandler }: any) => {
    const [fullName, setFullName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [registrationCode, setRegistrationCode] = useState("");
    const [registered, setRegistered] = useState(false);

    const onSubmitHandler = (event: any) => {
        event.preventDefault();
        const registered = {
            fullName: fullName,
            username: username,
            password: password,
            email: email,
            registrationCode: registrationCode
        };
        axios.post("http://localhost:4000/signup", registered)
            .then(res => res.data.registered === true ? setRegistered(true) : console.log("no"));
    };

    return (
        <>
            { registered && <RegisteredPage loginPageHandler={ loginPageHandler }/>}
            { !registered && <form className={ styles.signUpContainer } onSubmit={ onSubmitHandler }>
                <h2>Welcome to Open Up</h2>
                <p className={ styles.inputTag }>Full name</p>
                <SimpleInput type={ "" } value={ fullName } onChange={ (event: { target: { value: SetStateAction<string>; }; }) => setFullName(event.target.value) } />
                <p className={ styles.inputTag }>Username</p>
                <SimpleInput type={ "" } value={ username } onChange={ (event: { target: { value: SetStateAction<string>; }; }) => setUserName(event.target.value) } />
                <p className={ styles.inputTag }>Password</p>
                <SimpleInput type={ "password" } value={ password } onChange={ (event: { target: { value: SetStateAction<string>; }; }) => setPassword(event.target.value) } />
                <p className={ styles.inputTag }>Open Up email</p>
                <SimpleInput type={ "email" } value={ email } onChange={ (event: { target: { value: SetStateAction<string>; }; }) => setEmail(event.target.value) } />
                <p className={ styles.inputTag }>Registration code</p>
                <SimpleInput type={ "password" } value={ registrationCode } onChange={ (event: { target: { value: SetStateAction<string>; }; }) => setRegistrationCode(event.target.value) } />
                <SubmitButton className={ styles.button } value="Register" />
                <a onClick={ loginPageHandler }>Go Back</a>
            </form> }
        </>
    );
};

export default SignUpPage;