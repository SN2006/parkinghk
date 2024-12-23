import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import {App} from "./App.jsx";
import i18n from "./i18n.js";
import {Home} from "./routes/home/Home.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/" element={<Home/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
