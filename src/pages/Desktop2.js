import '../App.css';
import {Link} from "react-router-dom";

export default function Desktop2() {
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
          <input type="text" id="password" name="password"></input>
          <br /><br />
          <Link to="/logged-in">
            <input type="submit" value="Sign-in" id="sign-in-button" />
          </Link>
        </form>
      </div>

      {/***** Footer *****/}
      <footer className="footer">
        <p id="footer-text">Raegan Girdley • Samee Lalani • Matthew Chambers</p>
      </footer>
    </div>
  );
}
