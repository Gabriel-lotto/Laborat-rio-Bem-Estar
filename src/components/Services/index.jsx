import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Nossos Serviços</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Atendimento a distância</ServicesH2>
          <ServicesP>Buscando a sua convivência e conforto o Laboratório Alvaro coloca à sua disposição o serviço de Atendimento a distância para atender melhor seus pacientes.</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Agendamento on-line</ServicesH2>
          <ServicesP>É possível realizar o agendamento on-line, todo o processo é rápido e garante que o usuário receberá lembretes para que nãoe esqueça da consulta.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Histórico eletrônico</ServicesH2>
          <ServicesP>Com o agendamento e a entrega de resultados on-line, ainda é possível manter um histórico eletrônico com todos os exames já realizados pelo paciente no laboratório.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
