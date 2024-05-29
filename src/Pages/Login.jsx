import React, { useRef, useState } from "react";
import axios from "axios";
// import PageLayout from "./PageLayout";
export default function Login() {
  const [done, setDone] = useState(false);
  const email = useRef("");
  const password = useRef("");
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value,
    };
    console.log(data);
    axios
      .post("https://ecom-be7bc-default-rtdb.firebaseio.com/login.json", data)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        setDone(true);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log("Error", error.message);
      });

    console.log(data);
  };

  return (
    <div>
      {/* <PageLayout />; */}
      <center className="center">
        <h1>Login with Creditials</h1>
        {done && <h2>Login Successfully!</h2>}
        <form>
          <img src="/logo123.png" height="90" width="auto" />
          <br />

          <input
            type="email"
            name="email"
            placeholder="enter email"
            // value={email}
            ref={email}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            // value={password}
            ref={password}
          />
          <br />
          <button onClick={submitHandler}>Login</button>
        </form>
      </center>
    </div>
  );
}

// Create 1 card in center of the body
// 1.Logo
// 2.field(username)
// 3.email
// 3 password
// 4.Register Button
