import {WantCarParkForm} from "./wantCarparkForm/WantCarParkForm.jsx";
import {useEffect} from "react";

export const WantCarPark = () => {
    useEffect(() => {
        document.title = "Want Car Park Space";
    }, []);

    return <main>
        <WantCarParkForm/>
    </main>
}