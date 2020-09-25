import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaBuilding, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import Container from 'components/atoms/Container';
import Grid from 'components/atoms/Grid';
import Heading from 'components/atoms/Heading';

const Root = styled.footer`
    background-color: #2a2a2a;
    color: #aaa;  
    padding: 40px 0;

    h6 {
        color: #fff;
        margin-top: 0;
        text-transform: uppercase;
    }
`;

const IconContainer = styled.span`
    margin-right: 8px;
`;

const FooterLink = styled.a`
    color: ${props => props.theme.colors.primary.main};
    text-decoration: none;

    &:hover {
        color: ${props => props.theme.colors.primary.dark};
    }
`;

const Footer = () => (
    <Root>
        <Container>
            <Grid md={3}>
                <div>
                    <Heading>
                        <h6>Nardini Auto Escola</h6>
                    </Heading>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                    </p>
                </div>
                <div>
                    <Heading>
                        <h6>Contatos</h6>
                    </Heading>
                    <p>
                        <IconContainer>
                            <FaPhone />
                        </IconContainer>
                        (13) 12345-6789
                    </p>
                    <p>
                        <IconContainer>
                            <FaBuilding />
                        </IconContainer>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div>
                    <Heading>
                        <h6>Redes sociais</h6>
                    </Heading>
                    <p>
                        <FooterLink
                            target="_blank"
                            href="https://www.facebook.com/nardiniacademy"
                        >
                            <IconContainer>
                                <FaFacebookF />
                            </IconContainer>
                            FaFacebookF
                        </FooterLink>
                    </p>
                    <p>
                        <FooterLink
                            target="_blank"
                            href="https://www.linkedin.com/company/nardini-academy"
                        >
                            <IconContainer>
                                <FaLinkedinIn />
                            </IconContainer>
                            FaLinkedinIn
                        </FooterLink>
                    </p>
                    <p>
                        <FooterLink
                            target="_blank"
                            href="https://www.twitter.com/nardiniacademy"
                        >
                            <IconContainer>
                                <FaTwitter />
                            </IconContainer>
                            FaTwitter
                        </FooterLink>
                    </p>
                </div>
            </Grid>
        </Container>
    </Root>
);

export default Footer;