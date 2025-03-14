import {LoginForm} from "./loginSection/LoginForm.jsx";
import {ResetPasswordForm} from "./resetSection/ResetPasswordForm.jsx";
import {NotHaveAccountSection} from "./haveAccountSection/NotHaveAccountSection.jsx";
import {useEffect} from "react";

export const Login = () => {
    useEffect(() => {
        document.title = "Member Login";
    }, []);

    return <main>
        <LoginForm />
        <ResetPasswordForm/>
        <NotHaveAccountSection/>
    </main>
}