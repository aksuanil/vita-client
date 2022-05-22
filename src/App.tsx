import React, { useState } from 'react';
import './assets/css/output.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage';
import MainForm from './pages/MainForm';

export const LoginContext = React.createContext(false);

function App() {
  const [isLogin, setLogin] = useState(false);

  const checkLoginStatus = async () => {
    const response = await fetch('http://localhost:8080/api/auth/isLogin', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
    if (response.status === 200) {
      setLogin(true);
    }
    else {
      setLogin(false);
    }
  };
  checkLoginStatus();

  return (
    <div className="App">
      <body className="debug-screens" />
      <LoginContext.Provider value={isLogin}>
        <BrowserRouter>
          <Header />
          <div className='overflow-auto absolute bottom-0 left-0 right-0 top-24'>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="createlist" element={<MainForm />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </LoginContext.Provider >

    </div >
  );
}

export default App;
