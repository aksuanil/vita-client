import React, { useState } from 'react';
import './assets/css/output.css';
import HomePage from './pages/HomePage';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage';
import { useAuth } from './context/AuthContext';
import RegisterForm from './components/RegisterForm/RegisterForm';
import DietFormWrapper from './features/dietlist/components/DietFormWrapper';

export const LoginContext = React.createContext(false);

function App() {

  const { checkLoginStatus } = useAuth();

  const isLogin = checkLoginStatus();
  console.log(isLogin);
  return (
    <>
      <body className="debug-screens"/>

        <div className="App">
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Domine:wght@500;600&family=Eczar:wght@500;600;700;800&family=Federo&family=Karla:wght@400;500;700&family=Signika:wght@400;500;600&family=Spectral:wght@400;600;700&display=swap" rel="stylesheet" />
          <BrowserRouter>
            <Header isUserLogin={isLogin} />
            {/* <div className='overflow-auto bottom-0 left-0 right-0 top-24'> */}
            {/* absolute */}
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="signup" element={<RegisterForm />} />
              <Route path="admin" element={<RegisterForm />} />
              <Route path="createlist" element={<DietFormWrapper/>} />
              <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
            {/* </div> */}
          </BrowserRouter>
        </div >
      </>
      );
}

      export default App;
