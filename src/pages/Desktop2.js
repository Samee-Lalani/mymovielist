import '../App.css';
import {Link} from "react-router-dom";
import {useState} from 'react';

export default function Desktop2({handleSignIn}) {
  
  const [login, setLogin] = useState(true);
  
  return (
    <div className="desktop2">
      {/***** Header *****/}
      <header className="header">
        <h1>MyMovieList</h1>
      </header>

      {/***** Add and Delete Buttons *****/}
      <div className="add_del_bckgrnd" />


      {/***** Middle Section *****/}
      <div className="mid_section">
        <form className="log_in">
          <label for="username">Username: </label>
          <input type="text" id="username" name="username"></input>
          <br /><br />
          <label for="password">Password: </label>
          <input type="password" id="password" name="password"></input>
          <br /><br />
          {login ? (
            <Link to="/" onClick={handleSignIn}>
              <button type="submit" value="Sign-in" class="d2-buttons" id="sign-in-button">Sign-in</button>
            </Link>
          ) : (
            <Link to="/">
              <button type="submit" value="Sign-up" class="d2-buttons" id="sign-up-button">Sign-up</button>
            </Link>
          )}
          
        </form>
      </div>

      {/******** Sign-up *********/}
      {login ? (
        <div style={{ textAlign: "center", marginBottom: "15px" }}>
          <p>Need an account?</p>
          <button class="d2-buttons" onClick={() => setLogin(false)}>Sign-up</button>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginBottom: "15px" }}>
          <p>Already have an account?</p>
          <button class="d2-buttons" onClick={() => setLogin(true)}>Sign-in</button>
        </div>
      )}

      {/***** Footer *****/}
      <footer className="footer">
        <p id="footer-text">Raegan Girdley • Samee Lalani • Matthew Chambers</p>
      </footer>
    </div>
  );
}
