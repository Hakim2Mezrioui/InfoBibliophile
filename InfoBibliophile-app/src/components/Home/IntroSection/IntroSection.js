import { Fragment } from "react";
import styles from "./IntroSection.module.css";

const IntroSection = () => {
    return (
        <Fragment>
            <div className="section">
                <img className={`${styles.img}`} src="/images/sectionsIntro/ComputerScience.jpg" />
            </div>
        </Fragment>
    )
}

export default IntroSection;