import React from "react";
import classes from "./Home.module.scss";
import Button from "../components/UI/button/Button";
import Clients1 from "../components/svg/Clients-1";
import Clients2 from "../components/svg/Clients-2";
import Clients3 from "../components/svg/Clients-3";
import Clients4 from "../components/svg/Clients-4";
import Clients5 from "../components/svg/Clients-5";
import ServicesLike from "../components/svg/Services-like";
import ServicesEmail from "../components/svg/Services-email";
import ServicesDollar from "../components/svg/Services-dollar";
import ServicesSearch from "../components/svg/Services-search";
import CheckMark from "../components/svg/CheckMark";
import Star from "../components/svg/Star";
import StartWithUs from "../components/startWithUs/StartWithUs";

const Home = () => {
    return (
        <div className={classes.home}>
            <div className="container">
                <div className={classes.home__body}>
                    <section className={classes.main}>
                        <div className={classes.main__textBlock}>
                            <h1 className={classes.main__title}>Marketing solutions that grow your business.</h1>
                            <p className={classes.main__text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis
                                cursus, mi quis viverra ornare, eros dolor.
                            </p>
                            <div className={classes.main__buttons}>
                                <div className={classes.button}>
                                    <Button color={"blue"}>Our services</Button>
                                </div>
                                <div className={classes.button}>
                                    <Button color={"black"}>Contact us</Button>
                                </div>
                            </div>
                        </div>
                        <div className={classes.main__imagesBlock}>
                            <div className={classes.imageBlock__column}>
                                <img
                                    className={classes.image + " " + classes.wide + " " + classes.first}
                                    src={require("../images/main-wide-green.jpg")}
                                    alt="people"
                                />
                                <img className={classes.image + " " + classes.second} src={require("../images/main-yellow.jpg")} alt="people" />
                            </div>
                            <div className={classes.imageBlock__column}>
                                <img className={classes.image + " " + classes.third} src={require("../images/main-orange.jpg")} alt="people" />
                                <img
                                    className={classes.image + " " + classes.wide + " " + classes.four}
                                    src={require("../images/main-wide-blue.jpg")}
                                    alt="people"
                                />
                            </div>
                        </div>
                    </section>
                    <section className={classes.clients}>
                        <h3 className={classes.clients__title}>TRUSTED BY startups and large enterprises</h3>
                        <div className={classes.clients__images}>
                            <div className={classes.clientsImages__item}>
                                <Clients1 />
                            </div>
                            <div className={classes.clientsImages__item}>
                                <Clients2 />
                            </div>
                            <div className={classes.clientsImages__item}>
                                <Clients3 />
                            </div>
                            <div className={classes.clientsImages__item}>
                                <Clients4 />
                            </div>
                            <div className={classes.clientsImages__item}>
                                <Clients5 />
                            </div>
                        </div>
                    </section>
                    <section className={classes.services}>
                        <div className={classes.services__heading}>
                            <div className={classes.servicesHeading__subtitle}>services</div>
                            <h2 className={classes.servicesHeading__title}>Services we offer</h2>
                            <p className={classes.servicesHeading__text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis
                                cursus, mi quis viverra ornare, eros dolor.
                            </p>
                            <div className={classes.servicesHeading__button}>
                                <Button color={"blue"}>All services</Button>
                            </div>
                        </div>
                        <div className={classes.services__list}>
                            <div className={classes.services__column}>
                                <div className={classes.services__item + " " + classes.social}>
                                    <div className={classes.servicesItem__icon}>
                                        <ServicesLike />
                                    </div>
                                    <h3 className={classes.servicesItem__title}>Social Media Marketing</h3>
                                    <p className={classes.servicesItem__text}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.
                                    </p>
                                </div>
                                <div className={classes.services__item + " " + classes.email}>
                                    <div className={classes.servicesItem__icon}>
                                        <ServicesEmail />
                                    </div>
                                    <h3 className={classes.servicesItem__title}>Email Marketing</h3>
                                    <p className={classes.servicesItem__text}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.
                                    </p>
                                </div>
                            </div>
                            <div className={classes.services__column}>
                                <div className={classes.services__item + " " + classes.paid}>
                                    <div className={classes.servicesItem__icon}>
                                        <ServicesDollar />
                                    </div>
                                    <h3 className={classes.servicesItem__title}>Paid Advertising</h3>
                                    <p className={classes.servicesItem__text}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.
                                    </p>
                                </div>
                                <div className={classes.services__item + " " + classes.seo}>
                                    <div className={classes.servicesItem__icon}>
                                        <ServicesSearch />
                                    </div>
                                    <h3 className={classes.servicesItem__title}>SEO Optimization</h3>
                                    <p className={classes.servicesItem__text}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={classes.chooseUs}>
                        <div className={classes.chooseUs__imageBlock}>
                            <img className={classes.chooseUsImageBlock__image_wide} src={require("../images/choose-us-wide-green.jpg")} />
                            <img className={classes.chooseUsImageBlock__image_small} src={require("../images/choose-us-orange.jpg")} />
                        </div>
                        <div className={classes.chooseUs__textBlock}>
                            <p className={classes.chooseUs__subtitle}>why choose us</p>
                            <h2 className={classes.chooseUs__title}>We help great brands scale with content marketing.</h2>
                            <p className={classes.choouseUs__text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis
                                cursus, mi quis viverra ornare, eros dolor.
                            </p>
                            <ul className={classes.chooseUs__list}>
                                <li className={classes.chooseUsList__item}>
                                    <CheckMark /> This is some text inside of a div.
                                </li>
                                <li className={classes.chooseUsList__item}>
                                    <CheckMark /> This is some text inside of a div.
                                </li>
                                <li className={classes.chooseUsList__item}>
                                    <CheckMark /> This is some text inside of a div.
                                </li>
                                <li className={classes.chooseUsList__item}>
                                    <CheckMark /> This is some text inside of a div.
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className={classes.achievenment}>
                        <div className={classes.achievenment__textBlock}>
                            <div className={classes.achievenmentTextBlock__row}>
                                <div className={classes.achievenmentTextBlock__item}>
                                    <h2 className={classes.achievenmentItem__title}>1.2M+</h2>
                                    <p className={classes.achievenmentItem__text}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.
                                    </p>
                                </div>
                                <div className={classes.achievenmentTextBlock__item}>
                                    <h2 className={classes.achievenmentItem__title}>3.4B</h2>
                                    <p className={classes.achievenmentItem__text}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.
                                    </p>
                                </div>
                            </div>
                            <div className={classes.achievenmentTextBlock__row}>
                                <div className={classes.achievenmentTextBlock__item}>
                                    <h2 className={classes.achievenmentItem__title}>98%</h2>
                                    <p className={classes.achievenmentItem__text}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.
                                    </p>
                                </div>
                                <div className={classes.achievenmentTextBlock__item}>
                                    <h2 className={classes.achievenmentItem__title}>10+</h2>
                                    <p className={classes.achievenmentItem__text}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.achievenment__imageBlock}>
                            <img src={require("../images/achievenment-orange.jpg")} />
                        </div>
                    </section>
                    <section className={classes.feedback}>
                        <div className={classes.feedback__heading}>
                            <div className={classes.feedbackHeading__leftside}>
                                <p className={classes.feedbackHeading__subtitle}>testimonials</p>
                                <h2 className={classes.feedbackHeading__title}>See what our clients say</h2>
                                <p className={classes.feedbackHeading__text}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis
                                    cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.
                                </p>
                            </div>
                            <div className={classes.feedbackHeading__rightside}>
                                <div className={classes.feedbackHeading__button}>
                                    <Button color={"blue"}>Get in touch</Button>
                                </div>
                            </div>
                        </div>
                        <div className={classes.feedback__main}>
                            <div className={classes.feedbackMain__slider}>
                                <div className={classes.mainSlider__card}>
                                    <div className={classes.sliderCard__heading}>
                                        <div className={classes.cardHeading__image}>
                                            <img src={require("../images/feedback-orange.jpg")} alt="people" />
                                        </div>
                                        <div className={classes.cardHeading__initials}>
                                            <h4 className={classes.cardHeading__name}>John Doe</h4>
                                            <p className={classes.cardHeading__companyName}>Company Name</p>
                                        </div>
                                    </div>
                                    <div className={classes.sliderCard__content}>
                                        <h3 className={classes.cardContent__title}>"I recommend this agency"</h3>
                                        <p className={classes.cardContent__text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                            tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.
                                        </p>
                                        <div className={classes.cardContent__stars}>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.mainSlider__card}>
                                    <div className={classes.sliderCard__heading}>
                                        <div className={classes.cardHeading__image}>
                                            <img src={require("../images/feedback-blue.jpg")} alt="people" />
                                        </div>
                                        <div className={classes.cardHeading__initials}>
                                            <h4 className={classes.cardHeading__name}>Alice Smith</h4>
                                            <p className={classes.cardHeading__companyName}>Company Name</p>
                                        </div>
                                    </div>
                                    <div className={classes.sliderCard__content}>
                                        <h3 className={classes.cardContent__title}>"The support is awesome"</h3>
                                        <p className={classes.cardContent__text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                            tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.
                                        </p>
                                        <div className={classes.cardContent__stars}>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.mainSlider__card}>
                                    <div className={classes.sliderCard__heading}>
                                        <div className={classes.cardHeading__image}>
                                            <img src={require("../images/feedback-green.jpg")} alt="people" />
                                        </div>
                                        <div className={classes.cardHeading__initials}>
                                            <h4 className={classes.cardHeading__name}>Sophia Miller</h4>
                                            <p className={classes.cardHeading__companyName}>Company Name</p>
                                        </div>
                                    </div>
                                    <div className={classes.sliderCard__content}>
                                        <h3 className={classes.cardContent__title}>“A game changer for us”</h3>
                                        <p className={classes.cardContent__text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                            tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.
                                        </p>
                                        <div className={classes.cardContent__stars}>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.mainSlider__card}>
                                    <div className={classes.sliderCard__heading}>
                                        <div className={classes.cardHeading__image}>
                                            <img src={require("../images/feedback-green.jpg")} alt="people" />
                                        </div>
                                        <div className={classes.cardHeading__initials}>
                                            <h4 className={classes.cardHeading__name}>Sophia Miller</h4>
                                            <p className={classes.cardHeading__companyName}>Company Name</p>
                                        </div>
                                    </div>
                                    <div className={classes.sliderCard__content}>
                                        <h3 className={classes.cardContent__title}>“A game changer for us”</h3>
                                        <p className={classes.cardContent__text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                            tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.
                                        </p>
                                        <div className={classes.cardContent__stars}>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.mainSlider__card}>
                                    <div className={classes.sliderCard__heading}>
                                        <div className={classes.cardHeading__image}>
                                            <img src={require("../images/feedback-green.jpg")} alt="people" />
                                        </div>
                                        <div className={classes.cardHeading__initials}>
                                            <h4 className={classes.cardHeading__name}>Sophia Miller</h4>
                                            <p className={classes.cardHeading__companyName}>Company Name</p>
                                        </div>
                                    </div>
                                    <div className={classes.sliderCard__content}>
                                        <h3 className={classes.cardContent__title}>“A game changer for us”</h3>
                                        <p className={classes.cardContent__text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                            tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.
                                        </p>
                                        <div className={classes.cardContent__stars}>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.mainSlider__card}>
                                    <div className={classes.sliderCard__heading}>
                                        <div className={classes.cardHeading__image}>
                                            <img src={require("../images/feedback-green.jpg")} alt="people" />
                                        </div>
                                        <div className={classes.cardHeading__initials}>
                                            <h4 className={classes.cardHeading__name}>Sophia Miller</h4>
                                            <p className={classes.cardHeading__companyName}>Company Name</p>
                                        </div>
                                    </div>
                                    <div className={classes.sliderCard__content}>
                                        <h3 className={classes.cardContent__title}>“A game changer for us”</h3>
                                        <p className={classes.cardContent__text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                            tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.
                                        </p>
                                        <div className={classes.cardContent__stars}>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={classes.blog}>
                        <div className={classes.blog__heading}>
                            <div className={classes.blogHeading__leftside}>
                                <p className={classes.blogHeading__subtitle}>Blog</p>
                                <h2 className={classes.blogHeading__title}>Read our articles & news</h2>
                                <p className={classes.blogHeading__text}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis
                                    cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.
                                </p>
                            </div>
                            <div className={classes.blogHeading__rightside}>
                                <div className={classes.blogHeading__button}>
                                    <Button color={"blue"}>All Posts</Button>
                                </div>
                            </div>
                        </div>
                        <div className={classes.blog__main}>
                            <div className={classes.blogMain__slider}>
                                <div className={classes.mainSlider__card}>
                                    <div className={classes.sliderCard__heading}>
                                        <img className={classes.cardHeading__image} src={require("../images/blog-1.jpg")} />
                                        <p className={classes.cardHeading__imageText}>Social Media</p>
                                    </div>
                                    <div className={classes.sliderCard__content}>
                                        <p className={classes.cardContent__date}>August 28, 2022</p>
                                        <p className={classes.cardContent__title}>How to Use Social Proof in Marketing</p>
                                        <p className={classes.cardContent__text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit
                                            viverra sit semper lorem.
                                        </p>
                                        <p className={classes.cardContent__link}>Read now</p>
                                    </div>
                                </div>
                                <div className={classes.mainSlider__card}>
                                    <div className={classes.sliderCard__heading}>
                                        <img className={classes.cardHeading__image} src={require("../images/blog-2.jpg")} />
                                        <p className={classes.cardHeading__imageText}>SEO</p>
                                    </div>
                                    <div className={classes.sliderCard__content}>
                                        <p className={classes.cardContent__date}>August 28, 2022</p>
                                        <p className={classes.cardContent__title}>Make a great first impression with these titles</p>
                                        <p className={classes.cardContent__text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit
                                            viverra sit semper lorem.
                                        </p>
                                        <p className={classes.cardContent__link}>Read now</p>
                                    </div>
                                </div>
                                <div className={classes.mainSlider__card}>
                                    <div className={classes.sliderCard__heading}>
                                        <img className={classes.cardHeading__image} src={require("../images/blog-3.jpg")} />
                                        <p className={classes.cardHeading__imageText}>Strategy</p>
                                    </div>
                                    <div className={classes.sliderCard__content}>
                                        <p className={classes.cardContent__date}>August 28, 2022</p>
                                        <p className={classes.cardContent__title}>How to Grab Your Reader’s Attention</p>
                                        <p className={classes.cardContent__text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit
                                            viverra sit semper lorem.
                                        </p>
                                        <p className={classes.cardContent__link}>Read now</p>
                                    </div>
                                </div>
                                <div className={classes.mainSlider__card}>
                                    <div className={classes.sliderCard__heading}>
                                        <img className={classes.cardHeading__image} src={require("../images/blog-1.jpg")} />
                                        <p className={classes.cardHeading__imageText}>Social Media</p>
                                    </div>
                                    <div className={classes.sliderCard__content}>
                                        <p className={classes.cardContent__date}>August 28, 2022</p>
                                        <p className={classes.cardContent__title}>How to Use Social Proof in Marketing</p>
                                        <p className={classes.cardContent__text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit
                                            viverra sit semper lorem.
                                        </p>
                                        <p className={classes.cardContent__link}>Read now</p>
                                    </div>
                                </div>
                                <div className={classes.mainSlider__card}>
                                    <div className={classes.sliderCard__heading}>
                                        <img className={classes.cardHeading__image} src={require("../images/blog-2.jpg")} />
                                        <p className={classes.cardHeading__imageText}>SEO</p>
                                    </div>
                                    <div className={classes.sliderCard__content}>
                                        <p className={classes.cardContent__date}>August 28, 2022</p>
                                        <p className={classes.cardContent__title}>Make a great first impression with these titles</p>
                                        <p className={classes.cardContent__text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit
                                            viverra sit semper lorem.
                                        </p>
                                        <p className={classes.cardContent__link}>Read now</p>
                                    </div>
                                </div>
                                <div className={classes.mainSlider__card}>
                                    <div className={classes.sliderCard__heading}>
                                        <img className={classes.cardHeading__image} src={require("../images/blog-3.jpg")} />
                                        <p className={classes.cardHeading__imageText}>Strategy</p>
                                    </div>
                                    <div className={classes.sliderCard__content}>
                                        <p className={classes.cardContent__date}>August 28, 2022</p>
                                        <p className={classes.cardContent__title}>How to Grab Your Reader’s Attention</p>
                                        <p className={classes.cardContent__text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit
                                            viverra sit semper lorem.
                                        </p>
                                        <p className={classes.cardContent__link}>Read now</p>
                                    </div>
                                </div>
                                <div className={classes.mainSlider__card}>
                                    <div className={classes.sliderCard__heading}>
                                        <img className={classes.cardHeading__image} src={require("../images/blog-1.jpg")} />
                                        <p className={classes.cardHeading__imageText}>Social Media</p>
                                    </div>
                                    <div className={classes.sliderCard__content}>
                                        <p className={classes.cardContent__date}>August 28, 2022</p>
                                        <p className={classes.cardContent__title}>How to Use Social Proof in Marketing</p>
                                        <p className={classes.cardContent__text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit
                                            viverra sit semper lorem.
                                        </p>
                                        <p className={classes.cardContent__link}>Read now</p>
                                    </div>
                                </div>
                                <div className={classes.mainSlider__card}>
                                    <div className={classes.sliderCard__heading}>
                                        <img className={classes.cardHeading__image} src={require("../images/blog-2.jpg")} />
                                        <p className={classes.cardHeading__imageText}>SEO</p>
                                    </div>
                                    <div className={classes.sliderCard__content}>
                                        <p className={classes.cardContent__date}>August 28, 2022</p>
                                        <p className={classes.cardContent__title}>Make a great first impression with these titles</p>
                                        <p className={classes.cardContent__text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit
                                            viverra sit semper lorem.
                                        </p>
                                        <p className={classes.cardContent__link}>Read now</p>
                                    </div>
                                </div>
                                <div className={classes.mainSlider__card}>
                                    <div className={classes.sliderCard__heading}>
                                        <img className={classes.cardHeading__image} src={require("../images/blog-3.jpg")} />
                                        <p className={classes.cardHeading__imageText}>Strategy</p>
                                    </div>
                                    <div className={classes.sliderCard__content}>
                                        <p className={classes.cardContent__date}>August 28, 2022</p>
                                        <p className={classes.cardContent__title}>How to Grab Your Reader’s Attention</p>
                                        <p className={classes.cardContent__text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit
                                            viverra sit semper lorem.
                                        </p>
                                        <p className={classes.cardContent__link}>Read now</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <StartWithUs />
                </div>
            </div>
        </div>
    );
};

export default Home;
