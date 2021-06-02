import React from 'react';
import { FaFacebook,FaInstagram, FaTwitter, FaLinkedin,FaYoutube } from 'react-icons/fa';
import { FooterLink, FooterLinkItems, FooterContainer,FooterWrap,FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, SocialMedia, WebSiteRights,SocialMediaWrap,SocialLogo, SocialIcons,SocialIconLink } from './FooterElements';


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us</FooterLinkTitle>
                            <FooterLink to="/signin"> About us</FooterLink>
                            <FooterLink to="/signin"> How it works </FooterLink>
                            <FooterLink to="/signin"> Testimonial </FooterLink>
                            <FooterLink to="/signin"> Careers </FooterLink>
                            <FooterLink to="/signin"> Investors </FooterLink>
                            <FooterLink to="/signin"> Terms of Serivces</FooterLink>
                            <FooterLink to="/signin"> </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contact Us</FooterLinkTitle>
                            <FooterLink to='/'>Contact</FooterLink>
                            <FooterLink to='/'>Support</FooterLink>
                            <FooterLink to='/'> Destinations </FooterLink>
                            <FooterLink to='/'> Sponserships </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Videos </FooterLinkTitle>
                            <FooterLink to='/'> Submit Video </FooterLink>
                            <FooterLink to='/'> Ambassadors </FooterLink>
                            <FooterLink to='/'> Agency </FooterLink>
                            <FooterLink to='/'> Infuencer </FooterLink>
                            <FooterLink to='/'> </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                            <FooterLink to='/'> Instagram </FooterLink>
                            <FooterLink to='/'> Facebook </FooterLink>
                            <FooterLink to='/'> Youtube </FooterLink>
                            <FooterLink to='/'> Twitter </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to = '/'>
                            React
                        </SocialLogo>
                        <WebSiteRights> React &#169; {new Date().getFullYear()} All rights reserved. </WebSiteRights>
                        <SocialIcons>
                            <SocialIconLink href = '/' target = "_blank" aria-lable = "Facebook"> <FaFacebook/></SocialIconLink>
                            <SocialIconLink href = '/' target = "_blank" aria-lable = "Instagram"> <FaInstagram/></SocialIconLink>
                            <SocialIconLink href = '/' target = "_blank" aria-lable = "Youtube"><FaYoutube/></SocialIconLink>
                            <SocialIconLink href = '/' target = "_blank" aria-lable = "Twitter"><FaTwitter/></SocialIconLink>
                            <SocialIconLink href = '/' target = "_blank" aria-lable = "Linkedin"><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;