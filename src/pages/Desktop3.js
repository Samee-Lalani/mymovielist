import '../App.css';
import {Link} from "react-router-dom";
import Users from '../components/Users';

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

export default function Desktop1() {

  return (
    <div className="desktop1">
      {/***** Header *****/}
      <header className="header">
        <Link to="/signed-out">
          <button type="button" id="sign-in">Sign-out</button>
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