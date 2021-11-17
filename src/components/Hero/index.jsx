import React from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper,NavBtn,NavBtnLink } from './HeroElements'

const Hero = () => {


  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Laboratório Bem Estar</HeroH1>
        <HeroP>Se Cadastre Para conhecer melhor nossos serviços</HeroP>
        <HeroBtnWrapper>
        <NavBtn>
            <NavBtnLink to='/signup'>Realizar Cadastro</NavBtnLink>
          </NavBtn>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
