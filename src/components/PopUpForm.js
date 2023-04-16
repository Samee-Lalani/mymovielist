import React, { useState } from 'react';
import './PopUpForm.css';

function PopUpForm() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ title, image, description });
    setTitle('');
    setImage('');
    setDescription('');
  }

  return (
    <div className="popup-container">
      <div className="popup">
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
          </label>
          <label>
            Image URL:
            <input type="text" value={image} onChange={(event) => setImage(event.target.value)} />
          </label>
          <label>
            Description:
            <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
          </label>
          <button type="submit">Add</button>
        </form>
    </div>
  </div>

  );
}

export default PopUpForm;
