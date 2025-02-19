import {Questions} from "./questionSection/Questions.jsx";
import {Video} from "./videoSection/Video.jsx";
import {HeroSection} from "./heroSection/HeroSection.jsx";
import {MapSection} from "./mapsSection/MapSection.jsx";

export const Home = () => {
    return <main>
        <HeroSection/>
        <MapSection/>
        <Video/>
        <Questions/>
    </main>
}