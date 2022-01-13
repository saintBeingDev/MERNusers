import React from "react";
import { NavLink } from "react-router-dom";
// import "./Errorpage.css"


export default function Errorpage() {
  return (
    <>
    <div className="container">
       <h1>404</h1>
       <h2>UH OH! You're lost.</h2>
       <p>
         The page you are looking for does not exist. How you got here is
         a mystery. But you can click the button below to go back to the
         homepage.
       </p>
        <NavLink to="/" className="btn btn-success">HOME</NavLink>
    </div>
    </>
  );
}
