import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <header className="p-3  w-50  mx-auto">
        <div className="container ">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 mx-auto">
              <li>
                <Link to={"/"} className="nav-link px-2" style={{ color: "black" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/admin"} className="nav-link px-2" style={{ color: "black" }}>
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
