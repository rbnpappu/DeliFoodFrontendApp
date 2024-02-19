import { useState } from "react";

function useInputHook() {
    const [formData, setFormData] = useState({
        userName: "",
        userEmail: "",
        contactInfo: "",
        password: "",
        retypePassword: ""
    });

    return { form: formData, setFormData };
}

export default useInputHook;




