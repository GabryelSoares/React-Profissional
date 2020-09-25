import React from 'react';
// import PropTypes from 'prop-types';
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from 'react-icons/fa';

import Hero from 'components/molecules/Hero';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';
import Grid from 'components/atoms/Grid';
import Feature from 'components/atoms/Feature';
import Section from 'components/molecules/Section';

import HeroImage from 'assets/hero.jpg';
import AboutVideo from 'assets/about.mp4';
import Footer from 'components/organisms/Footer';

const Home = () => (
    <>
        <Hero image={HeroImage}>
            <Heading>
                <h1>
                    Ganhe sua <strong>liberdade</strong>
                    <br />
                para ir e vir
            </h1>
            </Heading>
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
            <Button color="primary" variant="outlined">
                Matricule-se agora
            </Button>
        </Hero>
        <Section>
            <Grid sm={2} md={4}>
                <Feature icon={<FaCar />} title="Maior e melhor frota">
                    <p>Algum texto</p>
                </Feature>
                <Feature icon={<FaKey />} title="Habilitação mais rápida">
                    <p>Algum texto</p>
                </Feature>
                <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
                    <p>Algum texto</p>
                </Feature>
                <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
                    <p>Algum texto</p>
                </Feature>
            </Grid>
        </Section>
        <Section inverse>
            <Heading>
                <h2>Conheça nossos serviços</h2>
            </Heading>
        </Section>
        <Section>
            <Grid md={2}>
                <div>
                    <Heading>
                        <h2>Nardini Auto Escola</h2>
                    </Heading>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                    </p>
                    <Button color="primary">Saiba mais</Button>
                </div>
                <div>
                    <video src={AboutVideo} width="100%" autoPlay loop />
                </div>
            </Grid>
        </Section>
        <Section inverse>
            <Heading>
                <h2>Dúvidas recorrentes</h2>
            </Heading>
        </Section>
        <Footer />
    </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;