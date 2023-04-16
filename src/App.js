import {Route, Routes} from 'react-router-dom';
import Desktop1 from "./pages/Desktop1.js";
import Desktop2 from './pages/Desktop2.js';
import ErrorPage from "./pages/ErrorPage.js";
import SignoutPage from "./pages/SignoutPage.js";
import { useState } from 'react';

export default function App() {

  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleSignIn = () => {
    setisLoggedIn(true);
  };

  const handleSignOut = () => {
    setisLoggedIn(false);
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Desktop1 isLoggedIn={isLoggedIn} handleSignOut={handleSignOut} /> }  />
        <Route path="/sign-in" element={<Desktop2 handleSignIn={handleSignIn}/>} />
        <Route path="/signed-out" element={<SignoutPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
