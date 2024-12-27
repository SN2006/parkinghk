import {Questions} from "./questionSection/Questions.jsx";
import {Video} from "./videoSection/Video.jsx";
import {HeroSection} from "./heroSection/HeroSection.jsx";

export const Home = () => {
    return <main>
        <HeroSection/>
        <Video/>
        <Questions/>
    </main>
}