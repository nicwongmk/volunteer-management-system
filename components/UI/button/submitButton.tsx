import styles from '../../../styles/components/UI/button.module.css';

const SubmitButton = (props: any) => {
    return (
        <input type="submit" className={ `${styles.submitButton} ${props.className}` } onClick={ props.onClick } value={ props.value }/>
    );
};

export default SubmitButton;