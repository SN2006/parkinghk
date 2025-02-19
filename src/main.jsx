import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import {App} from "./App.jsx";
import i18n from "./i18n.js";
import {Home} from "./routes/home/Home.jsx";
import {Login} from "./routes/login/Login.jsx";
import {HowToUseVideo} from "./routes/howToUseVideo/HowToUseVideo.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/how-to-use" element={<HowToUseVideo/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
