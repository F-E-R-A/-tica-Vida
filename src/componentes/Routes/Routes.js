import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "../Profile/profile";
import Home from "../Home/home";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/profile" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    );
}