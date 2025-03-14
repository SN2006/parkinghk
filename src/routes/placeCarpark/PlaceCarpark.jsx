import {PlaceCarparkForm} from "./placeCarparkForm/PlaceCarparkForm.jsx";
import {useEffect} from "react";

export const PlaceCarpark = () => {
    useEffect(() => {
        document.title = "Sell/Leave Your Car Park Space";
    }, []);

    return <main>
        <PlaceCarparkForm />
    </main>
}