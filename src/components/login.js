import React from 'react';
import { NavLink } from 'react-router-dom'

import { StyledBtns, StyledNav } from '../Styles'

export default function Login(props) {
   const { changeLogin, valuesLogin } = props

   console.log(valuesLogin)

   const onChangeLogin = event => {
      const { name, value } = event.target

      console.log(event.target)

      changeLogin(name, value)
   }

   return (
      <>
         <header className="header">
            <h1>Randomized Character Creator</h1>

            <form id='login-form' onSubmit={null}>
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
                           value={valuesLogin}
                           onChange={onChangeLogin}
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
                           value={valuesLogin}
                           onChange={onChangeLogin}
                        />
                     </label>
                  </div>
                  <NavLink to={`/account`} id='login-account link'>
                     <button>
                        Login
                     </button>
                  </NavLink>
               </div>
               <div className='signup-div'>
                  <h2>
                     Sign Up
                  </h2>
                  <p>
                     If you would like to save your characters and/or NPCs, please sign up to create an account.
                  </p>
                  <NavLink to={`/login/signup`} id='signup link'>
                     <button>
                        Sign Up
                     </button>
                  </NavLink>
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