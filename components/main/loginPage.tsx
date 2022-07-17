import Modal from "../UI/modal/modal";
import loginLogo from "../UI/main/loginLogo.png";
import logo from "../UI/logo/logo.png";
import styles from "../../styles/components/main/loginPage.module.css";
import SimpleInput from "../UI/input/simpleInput";
import MainButton from "../UI/button/mainButton";

const LoginPage = () => {
    return (
        <Modal className={ styles.loginPage } closeModal={undefined}>
            <div className={ styles.leftContainer }>
                <img src={ loginLogo.src } />
                <h2>Thank you for using the system</h2>
                <p>Love from Nicholas</p>    
            </div>
            <div className={ styles.rightContainer }>
                <img src={ logo.src } />
                <h2>Welcome to the <br /> Volunteer Management System</h2>
                <p>Login name</p>
                <SimpleInput type={ "" } value={undefined} onChange={undefined} />
                <p>Password</p>
                <SimpleInput type={ "password" } value={undefined} onChange={undefined} />
                <MainButton className={ styles.button }>Login</MainButton>
            </div>
        </Modal>
    );
};

export default LoginPage;