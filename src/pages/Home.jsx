import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import offers from '../assets/data/offers';

import Helmet from "../components/Helmet/Helmet";

import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";

import heroImg from '../assets/images/hero-img.png'

import Services from "../services/Services";

import OffersList from "../components/UI/OffersList";

const Home = () => {
    const [latestOffers, setLatestOffers] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [partners, setPartners] = useState([]);
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const filterdOffers = offers.filter(item => item.category === "IT");
        const filterdCompanies = offers.filter(item => item.category === "Hiring");
        const filterdPartners = offers.filter(item => item.category === "WithCAPIT");
        const filterdTestimonials = offers.filter(item => item.category === "Happy To Share Our Experience");

        setLatestOffers(filterdOffers);
        setCompanies(filterdCompanies);
        setPartners(filterdPartners);
        setTestimonials(filterdTestimonials);

    }, []);
    return (
        <Helmet title={"Home"}>
            <section className="hero__section">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero__content">
                                <p className="hero__subtitle">Embrace the   Adventure With Us</p>
                                <h2>"The only source of knowledge is experience." <br></br>
                                     - Albert Einstein</h2>
                                <p>We are Here To Help you with your Career </p>
                                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn"><Link to='/offer'>APPLY NOW</Link></motion.button>
                            </div>
                        </Col>

                        <Col lg='6' md='6'>
                            <div className="hero__img">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Services />
            <section className="Latest__Internships__offers">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                            <h2 className="section__title">Latest Internships Offers</h2>
                            <br></br>
                            <br></br>
                        </Col>
                        <OffersList data={latestOffers} />
                    </Row>
                </Container>
            </section>
            <section className="companies">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                            <h2 className="section__title">Companies</h2>
                        </Col>
                        <OffersList data={companies} />
                    </Row>
                </Container>
            </section>
            <section className="Partners">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                            <h2 className="section__title">Partners</h2>
                        </Col>
                        <OffersList data={partners} />
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                    <Col lg='12' className="text-center">
                            <h2 className="section__title">Testimonials</h2>
                            <br></br>
                            <br></br>
                        </Col>
                        <OffersList data={testimonials} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;
