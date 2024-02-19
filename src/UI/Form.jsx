import React, { useState } from "react";
import useInputHook from "../CustomHooks/InputHooks";
import classes from '../styles/style.module.css';
import useInputValidation from "../CustomHooks/CheckInput";
import Button from "./Button";


function Form() {
  const { form, setFormData } = useInputHook();
  const { errors, validateInput } = useInputValidation();
  const {
    userName,
    userEmail,
    contactInfo,
    password,
    retypePassword
  } = form;
 
 




  const handleChange = (e) => {
      const { name, value } = e.target;
 
      // Call useCheckInput with the current name, value, and prevValue
      validateInput({ name, value });
    

      // Update the form data
      setFormData(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8087/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add other headers if needed
        },
        mode: 'cors', // Ensure that CORS is enforced
        credentials: 'same-origin', // Or 'include' depending on your server configuration
        body: JSON.stringify(form) // Convert form data to JSON string
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form className={classes.form}>
      <input
        type="text"
        name="userName"
        value={userName}
        onChange={handleChange}
        placeholder="Username"
      />
    <label>{errors.userName && <span>{errors.userName}</span>}</label>
      <input
        type="text"
        name="userEmail"
        value={userEmail}
        onChange={handleChange}
        placeholder="Email"
      />
      <label>    {errors.userEmail && <span>{errors.userEmail}</span>}</label>
      <input
        type="text"
        name="contactInfo"
        value={contactInfo}
        onChange={handleChange}
        placeholder="Contact Info"
        pattern="[0-9]*"
      />
      <label>  {errors.contactInfo && <span>{errors.contactInfo}</span>}</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Password"
      />
      <label> {errors.password && <span>{errors.password}</span>}</label>
        <input
          type="password"
          name="retypePassword"
          value={retypePassword}
          onChange={handleChange}
          placeholder="Retype Password"
        />
        <label>  {password !== retypePassword && <span>{ "Passwords do not match"}</span>}</label>
    
  
        <Button handleClick={handleSubmit} disabled={Object.keys(errors).length !== 0} className={classes.button}>Submit</Button>

    </form>
  );
}

export default Form;
