import styles from "./NotRobotInput.module.css";
import {SimpleInput} from "./SimpleInput.jsx";
import {useState} from "react";

export const NotRobotInput = ({register, errors, t}) => {
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 900_000 + 100_000));

    return <SimpleInput
        input={{
            ...register("notRobot", {
                required: true,
                validate: (value) => {
                    return value === '' + randomNumber;
                }
            }),
            type: "text",
            style: {padding: "16px 0"},
        }}
        label={t("inputs.notRobot.label")}
        required
        hasError={errors.notRobot}
    >
        <p className={styles['within-input']}>{randomNumber}</p>
    </SimpleInput>
}