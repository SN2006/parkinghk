import styles from "../Form.module.css"
import {useTranslation} from "react-i18next";
import {CenterContainer} from "../../../components/UI/containers/CenterContainer.jsx";
import {SimpleInput} from "../../../components/UI/inputs/SimpleInput.jsx";
import {useForm} from "react-hook-form";
import {SimpleButton} from "../../../components/UI/buttons/SimpleButton.jsx";
import {H2} from "../../../components/UI/titles/H2.jsx";
import {EmailIcon} from "../../../components/UI/icons/EmailIcon.jsx";
import {KeyIcon} from "../../../components/UI/icons/KeyIcon.jsx";
import {useEffect} from "react";

export const LoginForm = () => {
    const [t, i18n] = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
        reset
    } = useForm();

    const onFormSubmit = (data) => {
        console.log(data);
    }
    
    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    return <section className={styles.login}>
        <CenterContainer>
            <div className={styles["login-inner"]}>
                <H2>
                    {t("login.titles.login")}
                </H2>
                <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
                    <div className={styles['form__inputs']}>
                        <SimpleInput
                            input={{
                                ...register("username", {required: true}),
                                type: "text"
                            }}
                            label={t("inputs.emailOrMobile.label")}
                            required
                            hasError={errors.username}
                            icon={<EmailIcon/>}
                        />
                        <SimpleInput
                            input={{
                                ...register("password", {required: true}),
                                type: "password"
                            }}
                            label={t("inputs.password.label")}
                            required
                            hasError={errors.password}
                            icon={<KeyIcon/>}
                        />
                    </div>
                    <SimpleButton
                        type="submit"
                    >
                        {t("login.buttons.login")}
                    </SimpleButton>
                </form>
            </div>
        </CenterContainer>
    </section>
}