import React from 'react';
import { NavLink } from 'react-router-dom'

import { StyledBtns, StyledNav } from '../Styles';

function Header() {
   return (
      <>
         <header className="header">
            <h1>Randomized Character Creator</h1>

            <nav>
               <StyledNav>
                  <StyledBtns>
                     <NavLink to={`/`} id='home link'>
                        <div className='home btn'>Home</div>
                     </NavLink>
                  </StyledBtns>
                  <StyledBtns>
                     <NavLink to={`/character-randomizer`} id='randomizer link'>
                        <div className='randomizer btn'>Randomizer</div>
                     </NavLink>
                  </StyledBtns>
                  <StyledBtns>
                     <NavLink to={`/contact`} id='contact link'>
                        <div className='contact btn'>Contact</div>
                     </NavLink>
                  </StyledBtns>
                  <StyledBtns>
                     <NavLink to={`/login`} id='login link'>
                        <div className='login btn'>Login</div>
                     </NavLink>
                  </StyledBtns>
               </StyledNav>
            </nav>
         </header>
      </>
   )
}


function Footer() {
   return (
      <>
         <footer>
            <nav>
               <StyledNav>
                  <StyledBtns>
                     <NavLink to={`/`} id='home link'>
                        <div className='home btn'>Home</div>
                     </NavLink>
                  </StyledBtns>
                  <StyledBtns>
                     <NavLink to={`/character-randomizer`} id='randomizer link'>
                        <div className='randomizer btn'>Randomizer</div>
                     </NavLink>
                  </StyledBtns>
                  <StyledBtns>
                     <NavLink to={`/contact`} id='contact link'>
                        <div className='contact btn'>Contact</div>
                     </NavLink>
                  </StyledBtns>
                  <StyledBtns>
                     <NavLink to={`/login`} id='login link'>
                        <div className='login btn'>Login</div>
                     </NavLink>
                  </StyledBtns>
               </StyledNav>
            </nav>
            <div className="copyright">
               <p>&copy Copyright Character Randomizer</p>
            </div>
         </footer>
      </>
   )
}

export { Header, Footer }