import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import MyLogin from './LoginSignUp/Login';
import MyWelcomePage from './MainViews/WelcomePage';

function App() {

  return (
    // <div>
    //   <MyLogin/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyLogin />} />
        <Route path="/welcome" element={<MyWelcomePage />} />
      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
