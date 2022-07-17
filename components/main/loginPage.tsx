import Modal from "../UI/modal/modal";
import loginLogo from "../UI/main/loginLogo.png";
import logo from "../UI/logo/logo.png";
import styles from "../../styles/components/main/loginPage.module.css";
import SimpleInput from "../UI/input/simpleInput";

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
                <p>Welcome to the <br /> Volunteer Management System</p>
                <SimpleInput type={""} value={undefined} onChange={undefined} />
            </div>
        </Modal>
    );
};

export default LoginPage;