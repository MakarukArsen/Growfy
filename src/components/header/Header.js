import React from "react";
import Logo from "../svg/Logo";
import Button from "../UI/button/Button";
import classes from "./Header.module.scss";
const Header = () => {
    return (
        <div className={classes.header}>
            <div className="container">
                <div className={classes.header__body}>
                    <div className={classes.header__logo}>
                        <Logo />
                    </div>
                    <div className={classes.header__menu}>
                        <ul className={classes.menu__list}>
                            <li className={classes.menu__item}>Home</li>
                            <li className={classes.menu__item}>About</li>
                            <li className={classes.menu__item}>Pages</li>
                            <li className={classes.menu__item}>Services</li>
                        </ul>
                        <div className={classes.menu__button}>
                            <Button>Get started</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
