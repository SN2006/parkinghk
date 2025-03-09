import styles from "../Form.module.css"
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {CenterContainer} from "../../../components/UI/containers/CenterContainer.jsx";
import {SimpleInput} from "../../../components/UI/inputs/SimpleInput.jsx";
import {SimpleButton} from "../../../components/UI/buttons/SimpleButton.jsx";
import {H2} from "../../../components/UI/titles/H2.jsx";
import {NotRobotInput} from "../../../components/UI/inputs/NotRobotInput.jsx";
import {EmailIcon} from "../../../components/UI/icons/EmailIcon.jsx";
import {useEffect} from "react";

export const ResetPasswordForm = () => {
    const [t, i18n] = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful},
        reset
    } = useForm();

    const onFormSubmit = (data) => {
        console.log(data)
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
                    {t("login.titles.reset")}
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
                        <NotRobotInput
                            t={t}
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <SimpleButton
                        type="submit"
                    >
                        {t("login.buttons.reset")}
                    </SimpleButton>
                </form>
            </div>
        </CenterContainer>
    </section>
}