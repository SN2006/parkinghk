import styles from "./RegistrationForm.module.css"
import {H2} from "../../../components/UI/titles/H2.jsx";
import {useTranslation} from "react-i18next";
import {CenterContainer} from "../../../components/UI/containers/CenterContainer.jsx";
import {useForm} from "react-hook-form";
import {SimpleInput} from "../../../components/UI/inputs/SimpleInput.jsx";
import {NotRobotInput} from "../../../components/UI/inputs/NotRobotInput.jsx";
import {RadioInput} from "../../../components/UI/inputs/RadioInput.jsx";
import {SimpleButton} from "../../../components/UI/buttons/SimpleButton.jsx";
import {CheckInput} from "../../../components/UI/inputs/CheckInput.jsx";

export const RegistrationForm = () => {
    const [t, i18n] = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onFormSubmit = (data) => {
        alert(JSON.stringify(data));
    }

    return <section className={styles.registration}>
        <CenterContainer>
            <div className={styles["registration-inner"]}>
                <H2>{t("registration.title")}</H2>
                <form
                    className={styles["registration__form"]}
                    onSubmit={handleSubmit(onFormSubmit)}
                >
                    <p className={styles["form__note"]}>
                        {t("registration.notes.free")}
                    </p>
                    <div className={styles["form__inputs"]}>
                        <SimpleInput
                            input={{
                                ...register("name", {
                                    required: true,
                                }),
                                type: "text",
                                placeholder: t("inputs.name.placeholder")
                            }}
                            label={t("inputs.name.label")}
                            required
                            hasError={errors.name}
                        />
                        <SimpleInput
                            input={{
                                ...register("password", {
                                    required: true,
                                }),
                                type: "password",
                                placeholder: t("inputs.password.placeholder")
                            }}
                            label={t("inputs.password.label")}
                            required
                            hasError={errors.password}
                        />
                        <SimpleInput
                            input={{
                                ...register("phone", {
                                    required: true,
                                    pattern: /[0-9+]+/
                                }),
                                type: "text",
                                placeholder: t("inputs.mobile.placeholder")
                            }}
                            label={t("inputs.mobile.label")}
                            required
                            hasError={errors.phone}
                        />
                        <SimpleInput
                            input={{
                                ...register("email", {
                                    required: true,
                                    pattern: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm
                                }),
                                type: "text",
                                placeholder: t("inputs.email.placeholder")
                            }}
                            label={t("inputs.email.label")}
                            required
                            hasError={errors.email}
                        />
                    </div>
                    <p className={styles["form__note"]}>
                        {t("registration.notes.validation")}
                    </p>
                    <div className={styles["radio-group"]}>
                        <RadioInput
                            label={t("inputs.customerType.label.owner")}
                            input={{
                                value: "owner",
                                name: "type",
                                id: "owner",
                                ...register("type", {required: true})
                            }}
                            hasError={errors.type}
                        />
                        <RadioInput
                            label={t("inputs.customerType.label.buyer")}
                            input={{
                                value: "buyer",
                                name: "type",
                                id: "buyer",
                                ...register("type", {required: true}),
                            }}
                            hasError={errors.type}
                        />
                    </div>
                    <p className={styles["form__note"]}>
                        {t("registration.notes.legallyLiable")}
                    </p>
                    <NotRobotInput
                        t={t}
                        register={register}
                        errors={errors}
                    />
                    <CheckInput
                        input={{
                            ...register("agreed", {required: true}),
                            id: "agreed"
                        }}
                        hasError={errors.agreed}
                    >
                        I have read and agreed the
                        <a href="https://www.parkinghk.com/en-US/about/terms/"> terms and conditions</a>
                    </CheckInput>
                    <SimpleButton type="submit">
                        {t("registration.buttons.register")}
                    </SimpleButton>
                </form>
            </div>
        </CenterContainer>
    </section>
}