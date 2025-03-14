import styles from "./WantCarParkForm.module.css"
import {CenterContainer} from "../../../components/UI/containers/CenterContainer.jsx";
import {H2} from "../../../components/UI/titles/H2.jsx";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {SimpleInput} from "../../../components/UI/inputs/SimpleInput.jsx";
import {StreetIcon} from "../../../components/UI/icons/StreetIcon.jsx";
import {BuildingIcon} from "../../../components/UI/icons/BuildingIcon.jsx";
import {DISTRICTS} from "../../../AdditionalData.jsx";
import {DistrictIcon} from "../../../components/UI/icons/DistrictIcon.jsx";
import {Select} from "../../../components/UI/inputs/Select.jsx";
import {DocumentIcon} from "../../../components/UI/icons/DocumentIcon.jsx";
import {SimpleButton} from "../../../components/UI/buttons/SimpleButton.jsx";
import {TextArea} from "../../../components/UI/inputs/TextArea.jsx";
import {SimpleHint} from "../../../components/UI/hints/SimpleHint.jsx";
import {useEffect} from "react";

export const WantCarParkForm = () => {
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
    }, [isSubmitSuccessful, reset])

    return <section className={styles['want-carpark']}>
        <CenterContainer>
            <div className={styles['want-carpark-inner']}>
                <H2>{t("wantCarpark.title")}</H2>
                <p className={styles['want-carpark__note']}>
                    {t("wantCarpark.hints.post")}
                </p>
                <form
                    onSubmit={handleSubmit(onFormSubmit)}
                    className={styles['want-carpark__form']}
                >
                    <div className={styles['form__inputs']}>
                        <SimpleInput
                            input={{
                                ...register("street", {required: true}),
                                type: "text"
                            }}
                            label={t("wantCarpark.inputs.street.label")}
                            required
                            hasError={errors.street}
                            icon={<StreetIcon/>}
                        />
                        <SimpleInput
                            input={{
                                ...register("building", {required: true}),
                                type: "text"
                            }}
                            label={t("wantCarpark.inputs.building.label")}
                            required
                            hasError={errors.building}
                            icon={<BuildingIcon/>}
                        />
                        <Select
                            label={t("wantCarpark.inputs.district.label")}
                            optionsData={DISTRICTS.map((district) => {
                                return {
                                    "value": `${district}`,
                                    "text": `${district}`
                                }
                            })}
                            required
                            icon={<DistrictIcon/>}
                            select={{
                                ...register("district", {
                                    required: true,
                                }),
                            }}
                            hasError={errors.district}
                        />
                        <Select
                            label={t("wantCarpark.inputs.purchaseLeaseSelect.label")}
                            optionsData={[
                                {value: "purchase", text: t("wantCarpark.inputs.purchaseLeaseSelect.purchase")},
                                {value: "lease", text: t("wantCarpark.inputs.purchaseLeaseSelect.lease")},
                            ]}
                            icon={<DocumentIcon/>}
                            select={{
                                ...register("role", {required: false}),
                            }}
                            hasError={errors.role}
                        />
                        <TextArea
                            textarea={{
                                ...register("remarks", {
                                    required: false,
                                }),
                            }}
                            label={<div className={styles['want-carpark__remark-container']}>
                                <span>{t("wantCarpark.inputs.remark.label")}</span>
                                <SimpleHint
                                    hint={t("wantCarpark.hints.post")}
                                    classname={styles["want-carpark__hint"]}
                                />
                            </div>}
                        />
                    </div>
                    <SimpleButton type="submit">
                        {t("wantCarpark.buttons.submit.text")}
                    </SimpleButton>
                </form>
            </div>
        </CenterContainer>
    </section>
}