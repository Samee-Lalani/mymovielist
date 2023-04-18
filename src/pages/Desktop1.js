import '../App.css';
import {Link} from "react-router-dom";
import {useState} from 'react';

import Cards from '../components/Cards';
import ModalBox from "../components/ModalBox";

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

  /************************ ADD CARD *************************/
  const [visible, setVisible] = useState(false);
  
  function addCard() {
    setVisible(true);
  }

  /************************ DELETE CARD ***********************/
  const [cards, setCards] = useState(DUMMY_USERS);

  function handleRemove(id) {
    const newCards = cards.filter((item) => item.id !== id);
    setCards(newCards);
  }

  /************************ EDIT CARD **************************/
  /** shows edit form **/
  const [popup, setPopup] = useState(false);

  function handlePopup() {
    setPopup(true);
  }

  return (
    <div className="desktop1">
      {/******************** Header **********************/}
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

      {/****************** Add Button ********************/}
      <div className="add_bckgrnd">
        {isLoggedIn ? (
          <div>
            <button type="button" id="top_button" onClick={() => addCard()}>Add</button>
            {visible ? (
              <>
                <ModalBox />
              </>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div>
            <button type="button" id="top_button" onClick={showAlert}>Add</button>
          </div>
        )}
      </div>

      {/***************************** Cards **************************/}
      <div className="mid_section">
        <ul id="myUL">
          {cards.map((card, index) => (
              <li id={card.id}>
                <Cards name={card.name} image={card.image} isLoggedIn={isLoggedIn} description={card.description} />
                {isLoggedIn ? (
                  <div id="editNDelete">
                    <button type="button" className="editButton" onClick={() => handlePopup()}>Edit</button>
                    {popup ? (
                      <>
                        <ModalBox />
                      </>
                    ) : (
                      <></>
                    )}
                    <button type="button" id="deleteButton" onClick={() => handleRemove(card.id)}>Delete</button>
                  </div>
                ) : (
                  <></>
                )}
              </li>
          ))} 
          </ul>
      </div>

      {/******************************* Footer **********************/}
      <footer className="footer">
        <p id="footer-text">Raegan Girdley • Samee Lalani • Matthew Chambers</p>
      </footer>
    </div>
  );
}
