import {Outlet} from "react-router";
import {Header} from "./components/parts/Header.jsx";
import {Footer} from "./components/parts/Footer.jsx";

export const App = () => {
    return <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
}