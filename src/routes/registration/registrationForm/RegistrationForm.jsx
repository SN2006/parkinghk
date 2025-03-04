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
import {ProfileIcon} from "../../../components/UI/icons/ProfileIcon.jsx";
import {KeyIcon} from "../../../components/UI/icons/KeyIcon.jsx";
import {EmailIcon} from "../../../components/UI/icons/EmailIcon.jsx";
import {PhoneIcon} from "../../../components/UI/icons/PhoneIcon.jsx";

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
                            }}
                            label={t("inputs.name.label")}
                            required
                            hasError={errors.name}
                            icon={<ProfileIcon />}
                        />
                        <SimpleInput
                            input={{
                                ...register("password", {
                                    required: true,
                                }),
                                type: "password",
                            }}
                            label={t("inputs.password.label")}
                            required
                            hasError={errors.password}
                            icon={<KeyIcon/>}
                        />
                        <SimpleInput
                            input={{
                                ...register("phone", {
                                    required: true,
                                    pattern: /[0-9+]+/
                                }),
                                type: "text",
                            }}
                            label={t("inputs.mobile.label")}
                            required
                            hasError={errors.phone}
                            icon={<PhoneIcon/>}
                        />
                        <SimpleInput
                            input={{
                                ...register("email", {
                                    required: true,
                                    pattern: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm
                                }),
                                type: "text",
                            }}
                            label={t("inputs.email.label")}
                            required
                            hasError={errors.email}
                            icon={<EmailIcon/>}
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
                    <div className={styles['form__inputs']}>
                        <NotRobotInput
                            t={t}
                            register={register}
                            errors={errors}
                        />
                        {/*<CheckInput*/}
                        {/*    input={{*/}
                        {/*        ...register("agreed", {required: true}),*/}
                        {/*        id: "agreed"*/}
                        {/*    }}*/}
                        {/*    hasError={errors.agreed}*/}
                        {/*>*/}
                        {/*    I have read and agreed the*/}
                        {/*    <a href="https://www.parkinghk.com/en-US/about/terms/"> terms and conditions</a>*/}
                        {/*</CheckInput>*/}
                        <SimpleButton type="submit">
                            {t("registration.buttons.register")}
                        </SimpleButton>
                    </div>
                </form>
            </div>
        </CenterContainer>
    </section>
}