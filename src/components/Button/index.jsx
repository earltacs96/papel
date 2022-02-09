import React from 'react';
import styles from './Button.module.css'
const render = (label, isPrimary, isSecondary, isSuccess, isWarning, isDanger, isDisabled) => {
    if(isPrimary) {
        return <button className={`${styles.btn} ${styles.primary}`} disabled={isDisabled}>{label}</button>
    } else if(isSecondary) {
        return <button className={`${styles.btn} ${styles.secondary}`} disabled={isDisabled}>{label}</button>
    } else if(isSuccess) {
        return <button className={`${styles.btn} ${styles.success}`} disabled={isDisabled}>{label}</button>
    } else if(isWarning) {
        return <button className={`${styles.btn} ${styles.warning}`} disabled={isDisabled}>{label}</button>
    } else if(isDanger) {
        return <button className={`${styles.btn} ${styles.danger}`} disabled={isDisabled}>{label}</button>
    } else {
        return <button className={`${styles.btn} ${styles.default}`} disabled={isDisabled}>{label}</button>
    }
}

const Button = ({label, isPrimary, isSecondary, isSuccess, isWarning, isDanger, isDisabled}) => {
    return render(label, isPrimary, isSecondary, isSuccess, isWarning, isDanger, isDisabled)
};

export default Button;