import React from 'react';
import { NavLink } from 'react-router-dom'

import { StyledHeader, StyledTopBtns, StyledBtmBtns, StyledNav, StyledFooter, StyledTopBtnDiv, StyledBtmBtnDiv, StyledH1 } from '../styles/header-footerStyles';

function Header() {
   return (
      <>
         <StyledHeader>
            <StyledH1>Randomized Character Creator</StyledH1>

            <StyledNav>
               <StyledTopBtns>
                  <NavLink to={`/`} className='home link'>
                     <StyledTopBtnDiv>Home</StyledTopBtnDiv>
                  </NavLink>
               </StyledTopBtns>
               <StyledTopBtns>
                  <NavLink to={`/character-randomizer`} className='randomizer link'>
                     <StyledTopBtnDiv>Randomizer</StyledTopBtnDiv>
                  </NavLink>
               </StyledTopBtns>
               <StyledTopBtns>
                  <NavLink to={`/contact`} className='contact link'>
                     <StyledTopBtnDiv>Contact</StyledTopBtnDiv>
                  </NavLink>
               </StyledTopBtns>
               <StyledTopBtns>
                  <NavLink to={`/login`} className='login link'>
                     <StyledTopBtnDiv>Login</StyledTopBtnDiv>
                  </NavLink>
               </StyledTopBtns>
            </StyledNav>
         </StyledHeader>
      </>
   )
}


function Footer() {
   return (
      <>
         <StyledFooter>
            <StyledNav>
               <StyledBtmBtns>
                  <NavLink to={`/`} id='home link'>
                     <StyledBtmBtnDiv>Home</StyledBtmBtnDiv>
                  </NavLink>
               </StyledBtmBtns>
               <StyledBtmBtns>
                  <NavLink to={`/character-randomizer`} id='randomizer link'>
                     <StyledBtmBtnDiv>Randomizer</StyledBtmBtnDiv>
                  </NavLink>
               </StyledBtmBtns>
               <StyledBtmBtns>
                  <NavLink to={`/contact`} id='contact link'>
                     <StyledBtmBtnDiv>Contact</StyledBtmBtnDiv>
                  </NavLink>
               </StyledBtmBtns>
               <StyledBtmBtns>
                  <NavLink to={`/login`} id='login link'>
                     <StyledBtmBtnDiv>Login</StyledBtmBtnDiv>
                  </NavLink>
               </StyledBtmBtns>
            </StyledNav>
            <div className="copyright">
               <p>&copy Copyright Character Randomizer</p>
            </div>
         </StyledFooter>
      </>
   )
}

export { Header, Footer }