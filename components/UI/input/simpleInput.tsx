import styles from "../../../styles/components/UI/input.module.css";

interface Input {
    className?: string,
    type: string,
    placeholder?: string,
    max?: number,
    min?: number,
    step?: number,
    value: any,
    onChange: any
}

const SimpleInput = ({ className, type, placeholder, max, min, step, value, onChange }: Input) => {
    return (
        <input 
            className={ `${ className } ${ styles.simpleInput }` }
            type={ type }
            placeholder={ placeholder }
            max={ max }
            min={ min }
            step={ step }
            value={ value }
            onChange={ onChange }
        />
    );
};

export default SimpleInput;