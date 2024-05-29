import React, { Fragment, useEffect, useState } from "react";
import "./PageLayout.css";
import { Link, Outlet } from "react-router-dom";
export default function PageLayout() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    // setUser(user);
  }, []);

  const handleClick = () => {
    localStorage.removeItem("user");
    setUser(user);
    console.log("clicked");
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="item" to="/cart">
              Cart
            </Link>
          </li>
          {user && user.id ? (
            <Fragment>
              <li>
                <Link to="#" className="item" onClick={handleClick}>
                  Logout
                </Link>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li>
                <Link className="item" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="item" to="/register">
                  Register
                </Link>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
