import '../App.css';
import {Link} from "react-router-dom";
import React, { useState } from 'react';

export default function Desktop1() {
  const[loginstatus,setLogin] = useState(0);
  return (
    <div className="desktop1">
      {/***** Header *****/}
      <header className="header">
        <Link to="/sign-in">
          <button type="button" id="sign-in"  >Sign-in</button>
        </Link>
        <h1 id="title">MyMovieList</h1>
      </header>

      {/***** Add and Delete Buttons *****/}
      <div className="add_del_bckgrnd">
        <button type="button" id="add" className="top_buttons">Add</button>
        <button type="button" id="delete" className="top_buttons">Delete</button>
      </div>

      {/***** Cards *****/}
      <div className="mid_section">
        <button onClick={
          ()=>{
            setLogin(1)
          }
        }/>
        <p>{loginstatus}</p>
      </div>

      {/***** Footer *****/}
      <footer className="footer">
        <p id="footer-text">Raegan Girdley • Samee Lalani • Matthew Chambers</p>
      </footer>
    </div>
  );
}
