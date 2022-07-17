import styles from '../../../styles/components/UI/modal.module.css';

interface Backdrop {
    hideBackdrop: any
}

interface Modal {
    className: string,
    closeModal: any,
    children: React.ReactNode
}

const Backdrop = ({ hideBackdrop }: Backdrop) => {
    return (
        <div className={ styles.backdrop } onClick={ hideBackdrop }/>
    );
};

const Modal = ({ className, closeModal, children }: Modal) => {
    return (
        <>
            <Backdrop hideBackdrop={ closeModal } />
            <div className={ `${className} ${styles.modal}` }>  
                { children }
            </div>
        </>
    );
};

export default Modal;