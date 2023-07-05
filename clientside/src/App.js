import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import MyLogin from "./LoginSignUp/Login";
import HomePage from "./MainViews/MainView";
import Lowbar from "./Lowbar/Lowbar";
import Imprint from "./AdditionalPages/Imprint";
import Support from "./AdditionalPages/Support";
import FAQ from "./AdditionalPages/FAQ";
import AGB from "./AdditionalPages/AGB";
import Profile from "./Profile/ProfilePage";
import Create from "./CreateRecipes/CreateRecipe";
import { UserProvider } from "./Context/UserContext";
import { TokenProvider } from "./Context/TokenContext";
import Recipe from "./DetailRecipeView/recipe.js";

function App() {
  return (
    // <div>
    //   <MyLogin/>
    // </div>
    <BrowserRouter>
      <TokenProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<MyLogin />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/impressum" element={<Imprint />} />
            <Route path="/support" element={<Support />} />
            <Route path="/agb" element={<AGB />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/neu" element={<Create />} />
            <Route path="/home/recipe/:id" element={<Recipe />} />
          </Routes>
          <Lowbar />
        </UserProvider>
      </TokenProvider>
    </BrowserRouter>
  );
}

export default App;
