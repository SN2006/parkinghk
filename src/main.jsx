import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import {App} from "./App.jsx";
import i18n from "./i18n.js";
import {Home} from "./routes/home/Home.jsx";
import {Login} from "./routes/login/Login.jsx";
import {HowToUseVideo} from "./routes/howToUseVideo/HowToUseVideo.jsx";
import {Registration} from "./routes/registration/Registration.jsx";
import {About} from "./routes/about/About.jsx";
import {FAQ} from "./routes/faq/FAQ.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/how-to-use" element={<HowToUseVideo/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/faq" element={<FAQ/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
