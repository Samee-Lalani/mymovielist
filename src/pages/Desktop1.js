import '../App.css';
import '../components/ModalBox.css';
import {Link} from "react-router-dom";
import {useState} from 'react';

import Cards from '../components/Cards';

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


export default function Desktop1({isLoggedIn, handleSignOut}) {

  function showAlert() { 
    window.alert("Not logged in!");
  }

  /************************ ADD CARD *************************/
  const [visible, setVisible] = useState(false);

  function openModal() {
    setVisible(!visible);
  }

  function closeModal() {
    setVisible(!visible);
  }

  function handleAdd() {
    const addId = cards.length+1;
    const newList = cards.concat({
      id: 'u' + addId,
      name: name,
      image: img,
      description: desc,
    });
    setCards(newList);
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
    setPopup(!popup);
  }

  function closePopup() {
    setPopup(!popup);
  }

  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [desc, setDesc] = useState('');
  const [tempId, setTempId] = useState('');

  function handleEdit(id) {
    const newList = cards.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          name: name,
          image: img,
          description: desc,
        };
        return updatedItem;
      }
      return item;
    });
    setCards(newList);
    setName('');
    setImg('');
    setDesc('');
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
            <button type="button" id="top_button" onClick={() => openModal()}>Add</button>
            {visible && (
              <>
                <div id="modalBox" class="modal">
                  <div class="modal-content">
                    <button class="close" onClick={() => closeModal()}>&times;</button>
                    <h2>Add Movie</h2>
                    <hr /><br />
                    <form onSubmit={e => {
                      e.preventDefault();
                      handleAdd();
                      closeModal();
                      }}>
                      <label for="newTitle">Title: </label>
                      <input type="text" name="newTitle" onChange={e => setName(e.target.value)} />
                      <br /><br />
                      <label for="newImg">Image: </label>
                      <input type="text" name="newImg" onChange={e => setImg(e.target.value)} />
                      <br /><br />
                      <label for="newDesc">Description: </label>
                      <input type="text" name="newDesc" onChange={e => setDesc(e.target.value)} />
                      <br /><br />
                      <button type="submit" >Submit</button>
                    </form>
                  </div>
                </div>
              </>
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
                <Cards name={card.name} image={card.image} description={card.description} />
                {isLoggedIn ? (
                  <div id="editNDelete">
                    <button type="button" id={index} className="editButton" onClick={() => {
                      handlePopup();
                      setTempId(card.id);
                    }}>Edit</button>
                    {popup && (
                      <>
                        <div id="modalBox" class="modal">
                          <div class="modal-content">
                            <button class="close" onClick={() => closePopup()}>&times;</button>
                            <h2>Edit Movie</h2>
                            <hr /><br />
                            <form onSubmit={(e) => {
                              e.preventDefault();
                              handleEdit(tempId);
                              closePopup();
                              }}>
                                <label for="newTitle">Title: </label>
                                <input type="text" name="newTitle" onChange={e => setName(e.target.value)} />
                                <br /><br />
                                <label for="newImg">Image: </label>
                                <input type="text" name="newImg" onChange={e => setImg(e.target.value)} />
                                <br /><br />
                                <label for="newDesc">Description: </label>
                                <input type="text" name="newDesc" onChange={e => setDesc(e.target.value)} /> 
                                <br /><br />
                                <button type="submit" >Submit</button>
                            </form>
                          </div>
                        </div>
                      </>
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
