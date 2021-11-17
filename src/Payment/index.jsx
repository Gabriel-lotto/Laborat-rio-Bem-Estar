import React from 'react'
import Icon1 from '../images/svg-dinheiro.svg'
import Icon2 from '../images/svg-cartao.svg'
import Icon3 from '../images/svg-pix.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './PaymentElements';

const Payment = () => {
  return (
    <ServicesContainer id='Payment'>
      <ServicesH1>Formas de Pagamento</ServicesH1>
      <ServicesP>Aceitamos as formas de pagamento abaixo</ServicesP>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Dinheiro</ServicesH2>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Cartão</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Pix</ServicesH2>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Payment
