import "../App.css"
import {Link} from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div className="error_page">
            <header className="header">
                <h1 className="header" style={{fontSize:"40px"}}>Successfully signed out.</h1>
            </header>

            <div className="add_del_bckgrnd">
                <Link to="/">
                    <button type="button" id="go-to-home" class="top_buttons">
                        Home
                    </button>
                </Link>
            </div>
        </div>
    );
}