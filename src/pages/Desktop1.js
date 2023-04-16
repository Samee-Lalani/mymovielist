import '../App.css';
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Users from '../components/Users';
import PopUpForm from '../components/PopUpForm';




const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Everything Everywhere All At Once',
    image:'https://m.media-amazon.com/images/I/A1f7vq1AwuL.jpg', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }, 
  {
    id: 'u2',
    name: 'Banshees of Inisherin',
    image:'https://image.tmdb.org/t/p/original/6tgmoZtdRWerdmK1KPcdf87uZyE.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 'u3',
    name: 'Avater: The Way of Water',
    image:'https://media.wdwnt.com/2022/11/avatar-the-way-of-water-poster-960x1200.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
]

function showAlert() { 
  window.alert("Not logged in!");
}

export default function Desktop1({isLoggedIn, handleSignOut}) {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = (value) => setShowForm(value);


  return (
    <div className="desktop1">
      {/***** Header *****/}
      <header className="header">
        {isLoggedIn ? (
          <div>
            <Link to="/signed-out">
              <button type="button" id="sign-out" onClick={handleSignOut}>Sign-out</button>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/sign-in">
              <button type="button" id="sign-in">Sign-in</button>
            </Link>
          </div>
        )}

        <h1 id="title">MyMovieList</h1>
      </header>

      {/***** Add and Delete Buttons *****/}
      <div className="add_del_bckgrnd">
        {isLoggedIn ? (
          <div>
            <button type="button" id="add" className="top_buttons" onClick={() => setShowForm(!showForm)}>Add</button>
            {showForm && <PopUpForm toggleForm={() => setShowForm(false)} />}
            <button type="button" id="delete" className="top_buttons">Delete</button>
          </div>
        ) : (
          <div>
          <button type="button" id="add" className="top_buttons" onClick={showAlert}>Add</button>
          <button type="button" id="delete" className="top_buttons" onClick={showAlert}>Delete</button>
          </div>
        )}
      </div>

      {/***** Cards *****/}
      <div className="mid_section">
        <div className="container">
          <Users user_list={DUMMY_USERS} />
        </div>
      </div>

      {/***** Footer *****/}
      <footer className="footer">
        <p id="footer-text">Raegan Girdley • Samee Lalani • Matthew Chambers</p>
      </footer>
    </div>
  );
}
