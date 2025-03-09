import styles from "./PlaceCarparkForm.module.css"
import {CenterContainer} from "../../../components/UI/containers/CenterContainer.jsx";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {H2} from "../../../components/UI/titles/H2.jsx";
import {SimpleInput} from "../../../components/UI/inputs/SimpleInput.jsx";
import {BuildingIcon} from "../../../components/UI/icons/BuildingIcon.jsx";
import {StreetIcon} from "../../../components/UI/icons/StreetIcon.jsx";
import {FloorIcon} from "../../../components/UI/icons/FloorIcon.jsx";
import {DollarIcon} from "../../../components/UI/icons/DollarIcon.jsx";
import {SimpleButton} from "../../../components/UI/buttons/SimpleButton.jsx";
import {Select} from "../../../components/UI/inputs/Select.jsx";
import {DISTRICTS} from "../../../AdditionalData.jsx";
import {DistrictIcon} from "../../../components/UI/icons/DistrictIcon.jsx";
import {useEffect, useState} from "react";
import {motion} from "motion/react";

const Photo = ({src, onDelete}) => {
    return <div className={styles['photo-container']}>
        <button className={styles['photo__delete-btn']} onClick={onDelete} type="button">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(5.12,5.12)"><path d="M9.15625,6.3125l-2.84375,2.84375l15.84375,15.84375l-15.9375,15.96875l2.8125,2.8125l15.96875,-15.9375l15.9375,15.9375l2.84375,-2.84375l-15.9375,-15.9375l15.84375,-15.84375l-2.84375,-2.84375l-15.84375,15.84375z"></path></g></g>
            </svg>
        </button>
        <img src={src} alt="uploaded photo"/>
    </div>
}

export const PlaceCarparkForm = () => {
    const [t, i18n] = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
        reset
    } = useForm();
    const [files, setFiles] = useState([]);

    const onSubmitHandler = (value) => {
        value["files"] = files;
        console.log(value);
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
            setFiles([]);
        }
    }, [isSubmitSuccessful, reset]);

    const addPhotoHandler = (e) => {
        setFiles((prevState) => [...prevState, e.target.files[0]]);
    }

    return <section className={styles['place-carpark']}>
        <CenterContainer>
            <div className={styles['place-carpark-inner']}>
                <form
                    onSubmit={handleSubmit(onSubmitHandler)}
                    className={styles['place-carpark__form']}
                >
                    <div className={styles['form__inputs']}>
                        <H2 className={styles['place-carpark__title']}>{t("placeCarpark.title")}</H2>
                        <SimpleInput
                            input={{
                                ...register("building", {
                                    required: true,
                                }),
                                type: "text",
                            }}
                            label={t("placeCarpark.inputs.building.label")}
                            required
                            hasError={errors.building}
                            icon={<BuildingIcon />}
                        />
                        <SimpleInput
                            input={{
                                ...register("street", {
                                    required: true,
                                }),
                                type: "text",
                            }}
                            label={t("placeCarpark.inputs.street.label")}
                            required
                            hasError={errors.street}
                            icon={<StreetIcon />}
                        />
                        <Select
                            label={t("placeCarpark.inputs.district.label")}
                            optionsData={DISTRICTS.map((district) => {
                                return {
                                    "value": `${district.state}: ${district.district}`,
                                    "text": `${district.state}: ${district.district}`
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
                        <SimpleInput
                            input={{
                                ...register("floor", {
                                    required: true,
                                }),
                                type: "text",
                            }}
                            label={t("placeCarpark.inputs.floor.label")}
                            required
                            hasError={errors.floor}
                            icon={<FloorIcon />}
                        />
                        <SimpleInput
                            input={{
                                ...register("spaceNumber", {
                                    required: true,
                                }),
                                type: "text",
                            }}
                            label={t("placeCarpark.inputs.spaceNumber.label")}
                            required
                            hasError={errors.spaceNumber}
                            icon={<BuildingIcon />}
                        />
                        <SimpleInput
                            input={{
                                ...register("rent", {
                                    required: true,
                                    min: 0,
                                }),
                                type: "number",
                            }}
                            label={t("placeCarpark.inputs.rent.label")}
                            required
                            hasError={errors.rent}
                            icon={<DollarIcon />}
                        />
                        <SimpleInput
                            input={{
                                ...register("sell", {
                                    required: true,
                                    min: 0,
                                }),
                                type: "number",
                            }}
                            label={t("placeCarpark.inputs.sell.label")}
                            required
                            hasError={errors.sell}
                            icon={<DollarIcon />}
                        />
                    </div>
                    <div className={styles["form__actions"]}>
                        <SimpleButton
                            className={styles["form__submit-btn"]}
                            type="submit"
                        >
                            {t("placeCarpark.buttons.submit.text")}
                        </SimpleButton>
                        <div className={styles["form__upload-btn"]}>
                            <span>{t("placeCarpark.buttons.uploadPhoto.text")}</span>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={addPhotoHandler}
                            />
                        </div>
                    </div>
                    <motion.p
                        className={styles["form__note"]}
                        initial={{
                            scale: 1,
                        }}
                        animate={files.length === 0 ? {
                            scale: 1,
                        } : {scale: 0}}
                    >
                        {t("placeCarpark.notes.uploadPhoto")}
                    </motion.p>
                    <div className={styles['form__images']}>
                        {files.map((file, i) => {
                            const src = URL.createObjectURL(file);
                            return <Photo key={i} src={src} onDelete={() => {
                                setFiles(prevState => {
                                    prevState.splice(i, 1);
                                    return [...prevState];
                                })
                            }}/>;
                        })}
                    </div>
                </form>
            </div>
        </CenterContainer>
    </section>
}