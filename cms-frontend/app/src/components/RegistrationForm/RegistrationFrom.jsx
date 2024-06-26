import React, { useState } from 'react'
import "./RegistrationForm.css"
import StyledInput from '../StyledInput/StyledInput'
import { useNavigate } from 'react-router-dom';

export default ({ setUser, user }) => {

  let navigator = useNavigate();

  let [form, setForm] = useState({
    email: "",
    password: ""
  })

  function controlForm(e) {
    setForm(curr => { return { ...curr, [e.target.name]: e.target.value } });
  }

  function controlFormSubmittion(e) {
    e.preventDefault();
    async function controller() {
      const url = "http://localhost:8080/login";

      const postData = form;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      };

      let response = await fetch(url, options);
      let responseData = await response.json();
      setUser(responseData.user);
      navigator('/teacher');
    }
    controller();
  }

  return (
    <div className='Whole'>
      <h1 className='Welcome'>WELCOME BACK!</h1>
      <h4 className='detail-text'>Please enter your details</h4>
      <form >
        <StyledInput placeholder={"email....."} type={"text"} value={form.email} name={"email"} onChange={controlForm} />
        <StyledInput placeholder={"password....."} type={"password"} value={form.password} name={"password"} onChange={controlForm} />
        <button className='login-btn' onClick={controlFormSubmittion}>Log in</button>
      </form>
    </div>
  )

}



