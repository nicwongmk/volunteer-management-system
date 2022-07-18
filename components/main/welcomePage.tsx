import { useState } from "react";
import Modal from "../UI/modal/modal";
import LoginPage from "./loginPage";
import loginLogo from "../UI/logo/loginLogo.png";
import styles from "../../styles/components/main/welcomePage.module.css";
import SignUpPage from "./SignUpPage";

const WelcomePage = () => {
    const [pageContent, setPageContext] = useState("login")

    return (
        <Modal className={ styles.welcomePage } closeModal={undefined}>
            <div className={ styles.leftContainer }>
                <img src={ loginLogo.src } />
                <h2>Thank you for using the system</h2>
                <p>Love from Nicholas</p>    
            </div>
            { (pageContent === "login") && <LoginPage signUpPageHandler={ () => setPageContext("signUp") }/>}
            { (pageContent === "signUp") && <SignUpPage />}
        </Modal>
    );
};

export default WelcomePage;