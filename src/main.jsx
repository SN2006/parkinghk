import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import {App} from "./App.jsx";
import i18n from "./i18n.js";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>

            </Route>
        </Routes>
    </BrowserRouter>
)
