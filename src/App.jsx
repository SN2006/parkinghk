import {Outlet} from "react-router";
import {Header} from "./components/parts/Header.jsx";
import {Footer} from "./components/parts/Footer.jsx";

export const App = () => {
    return <div style={{minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
        <Header/>
        <div className="header-replacer"></div>
        <Outlet/>
        <Footer/>
    </div>
}