// import logo from './logo.svg';
// import './App.css';
import Developper from './components/Developper';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Login from './pages/Login';
import Registration from './pages/Registration';
import Content from './pages/Content';
import ForgotPassword from './pages/ForgotPassword';


function App() {
  return (
    <>

      <BrowserRouter>
        <main>
          <Routes>
            <Route path='content' element={<Content />} >

              <Route path="home" element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="developper" element={<Developper />} />
              
            </Route>
            <Route index element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="forgot" element={<ForgotPassword />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>

  )
}

export default App;
