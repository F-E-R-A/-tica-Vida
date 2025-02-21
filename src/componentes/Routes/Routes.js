import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "../Profile/profile";
import Home from "../Home/home";
import Login from "../Login/login";
import UserRegister from "../UserRegister/userRegister";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/profile" element={<Profile/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<UserRegister/>}/>
            </Routes>
        </BrowserRouter>
    );
}