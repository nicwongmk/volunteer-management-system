import { useState } from "react";
import Modal from "../UI/modal/modal";
import LoginPage from "./loginPage";
import SignUpPage from "./signUpPage";
import loginLogo from "../UI/logo/loginLogo.png";
import styles from "../../styles/components/main/welcomePage.module.css";

const WelcomePage = ({ loginHandler }: any) => {
    const [pageContent, setPageContent] = useState("login")

    return (
        <Modal className={ styles.welcomePage } closeModal={undefined}>
            <div className={ styles.leftContainer }>
                <img src={ loginLogo.src } />
                <h2>Thank you for using the system</h2>
                <p>Love from Nicholas</p>    
            </div>
            { (pageContent === "login") && <LoginPage signUpPageHandler={ () => setPageContent("signUp") loginHandler={ loginHandler } }/>}
            { (pageContent === "signUp") && <SignUpPage loginPageHandler={ () => setPageContent("login") }/>}
        </Modal>
    );
};

export default WelcomePage;