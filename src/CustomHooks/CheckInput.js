import { useState } from 'react';

function useInputValidation() {
    const [errors, setErrors] = useState({});

    const validateInput = ({ name, value }) => {
        const userNamePattern = /^[a-zA-Z]+$/;
        const userEmailPattern = /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;
        const contactInfoPattern = /^\d{10}$/;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        switch (name) {
            case "userName":
                setErrors(prevErrors => ({ ...prevErrors, [name]: userNamePattern.test(value) ? null : "Please enter only characters" }));
                break;
            case "userEmail":
                setErrors(prevErrors => ({ ...prevErrors, [name]: userEmailPattern.test(value) ? null : "Please enter a valid email address" }));
                break;
            case "contactInfo":
                setErrors(prevErrors => ({ ...prevErrors, [name]: contactInfoPattern.test(value) ? null : "Please enter a 10-digit phone number" }));
                break;
            case "password":
                setErrors(prevErrors => ({ ...prevErrors, [name]: passwordPattern.test(value) ? null : "Please enter a password in the correct format" }));
                break;
            default:
                setErrors(prevErrors => ({ ...prevErrors, [name]: null }));
        }
    };

    return { errors, validateInput };
}

export default useInputValidation;
