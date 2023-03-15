import React from "react";
import Button from "../UI/button/Button";
import classes from "./StartWithUs.module.scss";

const StartWithUs = () => {
    return (
        <div className={classes.startWithUs}>
            <div className={classes.textBlock}>
                <h2 className={classes.title}>Ready to start scaling your business now?</h2>
                <p className={classes.text}>Lorem ipsum dolor sit am consectetur adipiscing varius enim in eros.</p>
            </div>
            <div className={classes.buttons}>
                <div className={classes.button}>
                    <Button color={"blue"}>Our services</Button>
                </div>
                <div className={classes.button}>
                    <Button color={"black"}>Contact us</Button>
                </div>
            </div>
        </div>
    );
};

export default StartWithUs;
