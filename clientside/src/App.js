import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import MyLogin from './LoginSignUp/Login';
import RecommandationPage from './MainViews/RecommendationPage.js';
import SearchPage from './MainViews/SearchPage.js';
import SafedRecipePage from './MainViews/SafedPage.js';
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
          <Route path="/recommandation" element={<RecommandationPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/safed" element={<SafedRecipePage />} />
          <Route path="/impressum" element={<Imprint />} /> 
        </Routes>
        <Lowbar/>
      </UserProvider>
    </BrowserRouter>
    

  );
}

export default App;
