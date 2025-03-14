import {Questions} from "./questionSection/Questions.jsx";
import {Video} from "./videoSection/Video.jsx";
import {HeroSection} from "./heroSection/HeroSection.jsx";
import {MapSection} from "./mapsSection/MapSection.jsx";
import {useEffect} from "react";

export const Home = () => {
    useEffect(() => {
        document.title = "ParkingHK.com Official Website";
    }, [])

    return <main>
        <HeroSection/>
        <MapSection/>
        <Video/>
        <Questions/>
    </main>
}