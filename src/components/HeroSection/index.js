import React , {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import { HeroBg, HeroContainer, VideoBg , HeroContent, HeroH1, HeroBtnWrapper, HeroP, ArrowForward, ArrowRight} from './HeroSection';


const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id = 'home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src = {Video} type='video/mp4' />  
            </HeroBg>
            <HeroContent>
                <HeroH1>Artificial Intellegence Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account and receive $250 in 
                    credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to = "signup" 
                    smooth = {true}
                    duration = {500}
                    spy = {true}
                    exact = 'true'
                    offset = {-80}
                    onMouseEnter = {onHover} 
                    onMouseLeave = {onHover} 
                    primary = 'true'
                    dark = 'true'
                    >
                         started  { hover ? <ArrowForward/> : <ArrowRight/> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;