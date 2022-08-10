import React from 'react';
import { NavLink } from 'react-router-dom'

import { StyledBtns, StyledNav } from '../Styles'

export default function Login(props) {
   const { } = props



   return (
      <>
         <header className="header">
            <h1>Randomized Character Creator</h1>

            <form id='login' onSubmit={null}>
               <div className='login-div'>
                  <h2>
                     Login
                  </h2>
                  <div className='login-un'>
                     <label>
                        Username
                        <input
                           type='text'
                           id='input-un'
                           name='username'
                        // value={}
                        // onChange={}
                        />
                     </label>
                  </div>
                  <div className='login-pass'>
                     <label>
                        Password
                        <input
                           type='text'
                           id='input-pass'
                           name='password'
                        // value={}
                        // onChange={}
                        />
                     </label>
                  </div>
               </div>
               <div className='signup-div'>
                  <h2>
                     Sign Up
                  </h2>
                  <p>
                     If you would like to save your characters and/or NPCs, please sign up to create an account.
                  </p>
                  {/* Will make this button go to the sign up page once clicked */}
                  <button
                  // onChange={}
                  > Sign Up </button>
               </div>
            </form>

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
                     <NavLink to={`/about`} id='about link'>
                        <div className='about btn'>About</div>
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
                     <NavLink to={`/about`} id='about link'>
                        <div className='about btn'>About</div>
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