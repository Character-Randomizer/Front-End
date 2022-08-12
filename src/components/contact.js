import React from 'react';
import { NavLink } from 'react-router-dom'

import { StyledBtns, StyledNav } from '../Styles';

export default function Contact(props) {
   const { changeContact, valuesContact } = props

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

         <form id='contact-form' onSubmit={null}>
            <div className='contact-div'>
               <h2>
                  Contact the Team
               </h2>
               <p>
                  If you would like to get in touch with the team, feel free to fill out the form below.
               </p>
               <div className='contact-first-name'>
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
               <div className='contact-last-name'>
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
               <div className='contact-un'>
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
               <div className='contact-email'>
                  <label>
                     Email
                     <input
                        type='text'
                        id='input-email'
                        name='email'
                     // value={}
                     // onChange={}
                     />
                  </label>
               </div>
               <div className='contact-subject'>
                  <label>
                     Email
                     <input
                        type='text'
                        id='input-subject'
                        name='subject'
                     // value={}
                     // onChange={}
                     />
                  </label>
               </div>
               <div className='contact-message'>
                  <label>
                     Message
                     <input
                        type='text'
                        id='input-message'
                        name='message'
                     // value={}
                     // onChange={}
                     />
                  </label>
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