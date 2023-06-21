import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import MyLogin from './LoginSignUp/Login';
import HomePage from './MainViews/MainView';
import Lowbar from './Lowbar/Lowbar';
import Imprint from './Imprint/Imprint';
import { UserProvider } from './Context/UserContext';

function App() {

  return (
    // <div>
    //   <MyLogin/>
    // </div>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<MyLogin />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/impressum" element={<Imprint />} /> 
        </Routes>
        <Lowbar/>
      </UserProvider>
    </BrowserRouter>
    

  );
}

export default App;
