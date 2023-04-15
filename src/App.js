import React, { useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import Desktop1 from "./pages/Desktop1.js";
import Desktop2 from './pages/Desktop2.js';
import ErrorPage from "./pages/ErrorPage.js";

export default function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Desktop1 /> }  />
        <Route path="/sign-in" element={<Desktop2 />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
