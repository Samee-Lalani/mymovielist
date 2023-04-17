import './Cards.css';
import { useState } from 'react';

export default function Cards(props) {

    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setShowForm(true);
    };

    function handleSubmit(event) {
        event.preventDefault();
    };

    return (
        <div className="flex_box">
            <div className="box">
                <div className="person" key = {props.id}>
                    <p className="name">{props.name}</p>
                    <img src={props.image} alt={props.name} className="personsimage" />
                    <p className="description">{props.description}</p>
                    {props.isLoggedIn ? (
                        <>
                        <button id="edit-button" onClick={handleClick}>Edit</button>
                        <br /> <br />
                        {showForm && (
                            <form className="popupForm" onSubmit={handleSubmit}>
                                <label for="newTitle">Title: </label>
                                <input type="text" id="nameInput" name="newTitle" />
                                <br />
                                <label for="newImg">Image: </label>
                                <input type="image" name="newImage" alt="Insert Image" />
                                <br />
                                <label for="newDesc">Description: </label>
                                <input type="text" id="descInput" name="newDesc" />
                                <br /><br />
                                <input id="submitForm" type="submit" value="Submit" />
                                <br /> <br />
                            </form>
                        )}
                        </>
                    ) : (
                        <>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
