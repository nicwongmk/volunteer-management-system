import logo from "../UI/logo/logo.png";
import SimpleInput from "../UI/input/simpleInput";
import MainButton from "../UI/button/mainButton";
import styles from "../../styles/components/main/welcomePage.module.css";

const LoginPage = ({ signUpPageHandler }: any) => {
    return (
        <div className={ styles.loginContainer }>
            <img src={ logo.src } />
            <h2>Welcome to the <br /> Volunteer Management System</h2>
            <p className={ styles.inputTag }>Login name</p>
            <SimpleInput type={ "" } value={undefined} onChange={undefined} />
            <p className={ styles.inputTag }>Password</p>
            <SimpleInput type={ "password" } value={undefined} onChange={undefined} />
            <MainButton className={ styles.button }>Login</MainButton>
            <a onClick={ signUpPageHandler }>Register</a>
        </div>
    );
};

export default LoginPage;