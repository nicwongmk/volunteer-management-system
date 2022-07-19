import logo from "../../UI/logo/logo.png";
import styles from "../../../styles/components/main/welcomePage.module.css";
import MainButton from "../../UI/button/mainButton";

const RegisteredPage = ({ loginPageHandler }: any) => {
    return (
        <div className={ styles.registeredContainer }>
            <img src={ logo.src } />
            <h2>You have registered successfully</h2>
            <p>Welcome</p>
            <MainButton onClick={ loginPageHandler }>Login Now</MainButton>
        </div>
    );
};

export default RegisteredPage;