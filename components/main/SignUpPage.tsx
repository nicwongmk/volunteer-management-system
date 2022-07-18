import SimpleInput from "../UI/input/simpleInput";
import MainButton from "../UI/button/mainButton";
import styles from "../../styles/components/main/welcomePage.module.css";

const SignUpPage = () => {
    return (
        <div className={ styles.signUpContainer }>
            <h2>Welcome to Open Up</h2>
            <p className={ styles.inputTag }>Full name</p>
            <SimpleInput type={ "" } value={undefined} onChange={undefined} />
            <p className={ styles.inputTag }>Username</p>
            <SimpleInput type={ "" } value={undefined} onChange={undefined} />
            <p className={ styles.inputTag }>Password</p>
            <SimpleInput type={ "password" } value={undefined} onChange={undefined} />
            <p className={ styles.inputTag }>Email</p>
            <SimpleInput type={ "email" } value={undefined} onChange={undefined} />
            <p className={ styles.inputTag }>Registration code</p>
            <SimpleInput type={ "password" } value={undefined} onChange={undefined} />
            <MainButton className={ styles.button }>Register</MainButton>
        </div>
    );
};

export default SignUpPage;