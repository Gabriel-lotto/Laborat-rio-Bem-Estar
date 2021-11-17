import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>Sobre</SidebarLink>
          <SidebarLink to='discover' onClick={toggle}>Convênios</SidebarLink>
          <SidebarLink to='services' onClick={toggle}>Serviços</SidebarLink>
          <SidebarLink to='Payment' onClick={toggle}>Pagamento</SidebarLink>
          <SidebarLink to='consulta' onClick={toggle}>Consultas</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Login</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
