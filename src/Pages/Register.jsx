//////////////////////////////////////////////
import React, { useRef, useState } from "react";
import axios from "axios";
const url = "http://localhost:3033/api";
export default function Register() {
  const [done, setDone] = useState(false);
  const firstName = useRef("");
  const Age = useRef("");
  const Gender = useRef("");
  const email = useRef("");
  const password = useRef("");
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: firstName.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    console.log(data);
    axios
      .post(
        "https://ecom-be7bc-default-rtdb.firebaseio.coms/register.json",
        data
      )
      .then((res) => {
        console.log("Response", res.data);
        setDone(true);
        firstName.current.value = "";
        email.current.value = "";
        password.current.value = "";
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
    console.log(data);
  };

  return (
    <div className="register">
      {done && <h2>Succssfully Registered!</h2>}
      <h1>Register with UserDetails</h1>
      <form onSubmit={submitHandler}>
        <br />
        <input
          type="name"
          name="firstName"
          placeholder="FirstName"
          ref={firstName}
        />

        <br />
        <input type="number" name="Age" placeholder="Age" ref={Age} />
        <br />
        <input type="name" name="Gender" placeholder="Gender" ref={Gender} />
        <br />
        <input
          type="email"
          name="email"
          placeholder="enter email"
          ref={email}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          ref={password}
        />
        <br />
        <button className="blockt" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
