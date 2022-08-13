import React from 'react';
import { Link, NavLink } from 'react-router-dom'

import { StyledBtns, StyledNav } from '../Styles'

export default function Login(props) {
   const { changeLogin, valuesLogin, userArr, loginErrors } = props

   const onChangeLogin = event => {
      const { name, value } = event.target

      changeLogin(name, value)
   }


   /* I want to make it so that when an user inputs either the wrong information or is not an user, the login button will give an error. If the information provided is an user in the userArr, then it will go to their account page.

   Possibly make a function with the disabled property
   */
   // const loginButton = () => {
   //    if ()
   // }

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

         <form id='login-form' onSubmit={null}>
            <div className='login-div'>
               <h2>
                  Login
               </h2>
               <div className='login-un'>
                  <div className='errors'>
                     {loginErrors.username}
                  </div>
                  <label>
                     Username
                     <input
                        type='text'
                        id='input-un'
                        name='username'
                        value={valuesLogin.username}
                        onChange={onChangeLogin}
                     />
                  </label>
               </div>
               <div className='login-pass'>
                  <div className='errors'>
                     {loginErrors.password}
                  </div>
                  <label>
                     Password
                     <input
                        type='text'
                        id='input-pass'
                        name='password'
                        value={valuesLogin.password}
                        onChange={onChangeLogin}
                     />
                  </label>
               </div>
               {/*Stretch: Login button needs to go through the array of known users and either 1) go to the known user's created character page or 2) throw an error that the user has not signed up 
               
               Possibly make a function with the disabled property
               */}

               {/* Need to make the to={link} for the specified user account */}
               <Link to={`/account`} id='login-account link'>
                  <button>
                     Login
                  </button>
               </Link>


            </div>
            <div className='signup-div'>
               <h2>
                  Sign Up
               </h2>
               <p>
                  If you would like to save your characters and/or NPCs, please sign up to create an account.
               </p>
               <Link to={`/login/signup`} id='signup link'>
                  <button>
                     Sign Up
                  </button>
               </Link>
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