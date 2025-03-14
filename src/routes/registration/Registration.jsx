import {RegistrationForm} from "./registrationForm/RegistrationForm.jsx";
import {HaveAccountSection} from "./haveAcountSection/HaveAccountSection.jsx";
import {useEffect} from "react";

export const Registration = () => {
    useEffect(() => {
        document.title = "Free Membership Registration";
    }, []);

    return <main>
        <RegistrationForm />
        <HaveAccountSection/>
    </main>
}