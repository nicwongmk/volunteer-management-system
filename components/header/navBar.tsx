
import logo from "../UI/header/logo.svg";
import styles from "../../styles/components/header/header.module.css";

const NavBar = () => {
    return (
        <nav className={ styles.navBar }>
            <img src={ logo.src } />
            <p>Volunteer Management System</p>
        </nav>
    );
};

export default NavBar;