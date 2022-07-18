import './assets/css/output.css';
import HomePage from './pages/Home/HomePage';
import Footer from './layouts/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage/NoPage';
import { useAuth } from './context/AuthContext';
import RegisterForm from './pages/Register/components/RegisterForm';
import DietFormWrapper from './pages/CreateList/components/DietFormWrapper';
import Header from './layouts/Header';
import AdminPage from './pages/Admin/AdminPage';

// export const LoginContext = React.createContext(false);

function App() {
  const { checkLoginStatus } = useAuth();
  const isLogin = checkLoginStatus();

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
              <Route path="admin" element={<AdminPage />} />
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
