import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import MyLogin from "./LoginSignUp/Login";
import HomePage from "./MainViews/MainView";
import Lowbar from "./Lowbar/Lowbar";
import Imprint from "./Imprint/Imprint";
import Profile from "./Profile/ProfilePage";
import Create from "./CreateRecipes/CreateRecipe";
import { UserProvider } from "./Context/UserContext";
import Recipe from "./DetailRecipeView/recipe.js";

function App() {
  return (
    // <div>
    //   <MyLogin/>
    // </div>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<MyLogin />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/impressum" element={<Imprint />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/neu" element={<Create />} />
          <Route path="/home/recipe/:id" element={<Recipe />} />
        </Routes>
        <Lowbar />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
