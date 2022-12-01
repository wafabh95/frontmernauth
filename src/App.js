import './App.css';
import Navbarr from "./components/Navbarr"
import Footer from "./components/Footer"
import UserTable from './components/UserTable';
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Post from "./pages/Post"
import Profile from './pages/Profile';


function App() {
  return (
    <div className="App">
 <Navbarr/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Post" element={<Post/>}/>
        <Route path="/userTable" element={<UserTable/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
     
      {/* <UserTable/> */}
      <Footer/>
    </div>
  );
}

export default App;
