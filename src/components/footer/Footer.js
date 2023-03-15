import React from "react";
import Logo from "../svg/Logo";
import Button from "../UI/button/Button";
import classes from "./Footer.module.scss";
import Linkedin from "../svg/Linkedin";
import Twitter from "../svg/Twitter";
import Facebook from "../svg/Facebook";
import Youtube from "../svg/Youtube";
import Instagram from "../svg/Instagram";
import Input from "../UI/input/Input";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className="container">
                <div className={classes.footer__body}>
                    <div className={classes.footer__row}>
                        <div className={classes.footer__info}>
                            <div className={classes.footerInfo__logo}>
                                <Logo />
                            </div>
                            <p className={classes.footerInfo__text}>
                                Growfy is a template highly suitable for modern marketing agencies, digital studios, startups and businesses. The
                                design is made in the dark style, which makes the site memorable and you can easily adapt it to your brand.
                            </p>
                            <div className={classes.footerInfo__contacts}>
                                <div className={classes.infoContacts__icon}>
                                    <Linkedin />
                                </div>
                                <div className={classes.infoContacts__icon}>
                                    <Twitter />
                                </div>
                                <div className={classes.infoContacts__icon}>
                                    <Facebook />
                                </div>
                                <div className={classes.infoContacts__icon}>
                                    <Youtube />
                                </div>
                                <div className={classes.infoContacts__icon}>
                                    <Instagram />
                                </div>
                            </div>
                        </div>
                        <div className={classes.footer__pages}>
                            <h3 className={classes.footerPages__title}>Pages</h3>
                            <ul className={classes.footerPages__list}>
                                <li className={classes.pagesList__item}>Home</li>
                                <li className={classes.pagesList__item}>About</li>
                                <li className={classes.pagesList__item}>Services</li>
                                <li className={classes.pagesList__item}>Packages</li>
                                <li className={classes.pagesList__item}>Blog</li>
                                <li className={classes.pagesList__item}>Contact</li>
                            </ul>
                        </div>
                        <div className={classes.footer__pages}>
                            <h3 className={classes.footerPages__title}>Utility pages</h3>
                            <ul className={classes.footerPages__list}>
                                <li className={classes.pagesList__item}>Instructions</li>
                                <li className={classes.pagesList__item}>Style guide</li>
                                <li className={classes.pagesList__item}>Licenses</li>
                                <li className={classes.pagesList__item}>Changelog</li>
                                <li className={classes.pagesList__item}>404 Not found</li>
                                <li className={classes.pagesList__item}>Password protected</li>
                            </ul>
                        </div>
                        <div className={classes.footer__subscribe}>
                            <h3 className={classes.footerSubscribe__title}>Subscribe to our newsletter</h3>
                            <p className={classes.footerSubscribe__text}>Lorem ipsum dolor sit am consectetur adipiscing</p>
                            <form className={classes.footerSubscribe__form}>
                                <div className={classes.subscribeForm__input}>
                                    <Input placeholder="Enter your email" />
                                </div>
                                <div className={classes.subscribeForm__button}>
                                    <Button color={"blue"}>Subscribe</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={classes.footer__copyright}>
                        <p>© 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
