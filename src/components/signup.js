import React from 'react';
import { NavLink } from 'react-router-dom'

import { StyledBtns, StyledNav } from '../Styles';

export default function SignUp() {
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

         <form id='signup' onSubmit={null}>
            <div className='signup-div'>
               <h2>
                  Sign Up
               </h2>
               <div className='signup-first-name'>
                  <label>
                     First Name
                     <input
                        type='text'
                        id='input-first-name'
                        name='first_name'
                     // value={}
                     // onChange={}
                     />
                  </label>
               </div>
               <div className='signup-last-name'>
                  <label>
                     Last Name
                     <input
                        type='text'
                        id='input-last-name'
                        name='last_name'
                     // value={}
                     // onChange={}
                     />
                  </label>
               </div>
               <div className='signup-un'>
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
               <div className='signup-pass'>
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
               <div className='signup-confirm-pass'>
                  <label>
                     Confirm Password
                     <input
                        type='text'
                        id='input-confirm-pass'
                        name='confirm_password'
                     // value={}
                     // onChange={}
                     />
                  </label>
               </div>
               <div className='signup-email'>
                  <label>
                     Email
                     <input
                        type='email'
                        id='input-email'
                        name='email'
                     // value={}
                     // onChange={}
                     />
                  </label>
               </div>
               <div className='signup-terms'>
                  <label>
                     Terms of Service
                     <div className='p-terms'>
                        <p>
                           Lorem ipsum terms
                        </p>
                     </div>
                     <input
                        type='button'
                        id='input-terms'
                        name='terms'
                     // value={}
                     // onChange={}
                     />
                  </label>
               </div>
               <div className='signup-dob'>
                  <label>
                     Date of Birth
                  </label>
                  {/* Will need to make the validation fit only a certain input (00/00/0000 - month/day/year) */}
                  <input
                     type='text'
                     id='input-dob'
                     name='dob'
                  // value={}
                  // onChange={}
                  />
               </div>
            </div>
         </form>

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