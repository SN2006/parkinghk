import {LoginForm} from "./loginSection/LoginForm.jsx";
import {ResetPasswordForm} from "./resetSection/ResetPasswordForm.jsx";
import {NotHaveAccountSection} from "./haveAccountSection/NotHaveAccountSection.jsx";

export const Login = () => {
    return <main>
        <LoginForm />
        <ResetPasswordForm/>
        <NotHaveAccountSection/>
    </main>
}