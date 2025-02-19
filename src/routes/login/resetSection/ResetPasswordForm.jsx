import styles from "../Form.module.css"
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {CenterContainer} from "../../../components/UI/containers/CenterContainer.jsx";
import {SimpleInput} from "../../../components/UI/inputs/SimpleInput.jsx";
import {SimpleButton} from "../../../components/UI/buttons/SimpleButton.jsx";
import {useState} from "react";
import {H2} from "../../../components/UI/titles/H2.jsx";

export const ResetPasswordForm = () => {
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 900_000 + 100_000));
    const [t, i18n] = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onFormSubmit = (data) => {
        alert(JSON.stringify(data));
    }

    return <section className={styles.login}>
        <CenterContainer>
            <div className={styles["login-inner"]}>
                <H2>
                    {t("login.titles.reset")}
                </H2>
                <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
                    <SimpleInput
                        input={{
                            ...register("username", {required: true}),
                            type: "text"
                        }}
                        label={t("inputs.emailOrMobile.label")}
                        required
                        hasError={errors.username}
                    />
                    <SimpleInput
                        input={{
                            ...register("notRobot", {
                                required: true,
                                validate: (value) => {
                                    return value === '' + randomNumber;
                                }
                            }),
                            type: "text",
                            style: {padding: "16px 15px"},
                            placeholder: t("inputs.notRobot.placeholder"),
                        }}
                        label={t("inputs.notRobot.label")}
                        required
                        hasError={errors.notRobot}
                    >
                        <p className={styles['within-input']}>{randomNumber}</p>
                    </SimpleInput>
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