import './ModalBox.css'
import { useState } from 'react';

export default function ModalBox() {

    const [visible, setVisible] = useState(true);

    function closeModal() {
        setVisible(false);
    }

    return (
        <>
            {visible ? (
                <>
                    <div id="modalBox" class="modal">
                        <div class="modal-content">
                            <button class="close" onClick={() => closeModal()}>&times;</button>
                            <h2>Edit Movie</h2>
                            <hr /><br />
                            <form onSubmit={e => {e.preventDefault()}}>
                                <label for="newTitle">Title: </label>
                                <input type="text" name="newTitle" />
                                <br /><br />
                                <label for="newImg">Image: </label>
                                <input type="image" value="New Image" alt="Input New Image" name="newImg" onClick={e => {e.preventDefault()}} />
                                <br /><br />
                                <label for="newDesc">Description: </label>
                                <input type="text" name="newDesc" />
                                <br /><br />
                                <button type="submit" >Submit</button>
                            </form>
                        </div>
                    </div>
                </>
            ): (
                <></>
            )}
            
        </>
    )
}