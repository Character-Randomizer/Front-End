import React from 'react';
import { NavLink } from 'react-router-dom'

import { StyledHeader, StyledTopBtns, StyledBtmBtns, StyledHeaderNav, StyledFooterNav, StyledFooter, StyledTopBtnDiv, StyledH1, StyledCopyrightDiv, StyledCopyrightP } from '../styles/header-footerStyles';

function Header() {
   return (
      <>
         <StyledHeader>
            <StyledH1>Randomized Character Creator</StyledH1>

            <StyledHeaderNav>
               <StyledTopBtns>
                  <NavLink to={`/`}>
                     <StyledTopBtnDiv>Home</StyledTopBtnDiv>
                  </NavLink>
               </StyledTopBtns>
               <StyledTopBtns>
                  <NavLink to={`/character-randomizer`}>
                     <StyledTopBtnDiv>Randomizer</StyledTopBtnDiv>
                  </NavLink>
               </StyledTopBtns>
               <StyledTopBtns>
                  <NavLink to={`/login`}>
                     <StyledTopBtnDiv>Login</StyledTopBtnDiv>
                  </NavLink>
               </StyledTopBtns>
               <StyledTopBtns>
                  <NavLink to={`/signup`}>
                     <StyledTopBtnDiv>Sign Up</StyledTopBtnDiv>
                  </NavLink>
               </StyledTopBtns>
            </StyledHeaderNav>
         </StyledHeader>
      </>
   )
}


function Footer() {
   return (
      <>
         <StyledFooter>
            <StyledFooterNav>
               <StyledBtmBtns>
                  <NavLink to={`/`} className='home btmLink'>
                     <div>Home</div>
                  </NavLink>
               </StyledBtmBtns>
               <StyledBtmBtns>
                  <NavLink to={`/character-randomizer`} className='randomizer btmLink'>
                     <div>Randomizer</div>
                  </NavLink>
               </StyledBtmBtns>
               <StyledBtmBtns>
                  <NavLink to={`/contact`} className='contact btmLink'>
                     <div>Contact</div>
                  </NavLink>
               </StyledBtmBtns>
               <StyledBtmBtns>
                  <NavLink to={`/login`} className='login btmLink'>
                     <div>Login</div>
                  </NavLink>
               </StyledBtmBtns>
               <StyledBtmBtns>
                  <NavLink to={`/signup`}>
                     <div>Sign Up</div>
                  </NavLink>
               </StyledBtmBtns>
            </StyledFooterNav>
            <StyledCopyrightDiv className="copyright">
               <StyledCopyrightP>&copy; Copyright Character Randomizer</StyledCopyrightP>
            </StyledCopyrightDiv>
         </StyledFooter>
      </>
   )
}

export { Header, Footer }