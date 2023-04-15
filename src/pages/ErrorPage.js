import "../App.css"
import {Link} from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div className="error_page">
            <header className="header">
                <h1 className="header" style={{fontSize:"75px"}}>404</h1>
            </header>
            
            <p id="pnf" className="add_del_bckgrnd">Page not found</p>
            <Link to="/">
                <button type="button" id="go-to-home" class="top_buttons">
                    Home
                </button>
            </Link>
        </div>
    );
}
