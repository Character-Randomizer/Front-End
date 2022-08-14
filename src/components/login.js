import React from 'react';
import { Link } from 'react-router-dom'

import { Header, Footer } from './header-footer'
import { StyledForm, StyledLabels, StyledH2, StyledLoginSignupBtnDiv, StyledInputs } from '../styles/login-signupStyles'
import StyledButtons from '../styles/buttonStyles'

export default function Login(props) {
   const { changeLogin, valuesLogin, loginErrors, submitLogin } = props

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
         <Header />

         <StyledForm onSubmit={submitLogin}>
            <div className='login-div'>
               <StyledH2>
                  Login
               </StyledH2>
               <div className='loginDivInput'>
                  <div className='errors'>
                     {loginErrors.username}
                  </div>
                  <StyledLabels>
                     Username
                  </StyledLabels>
                  <StyledInputs
                     type='text'
                     id='input-un'
                     name='username'
                     value={valuesLogin.username}
                     onChange={onChangeLogin}
                  />

               </div>
               <div className='loginDivInput'>
                  <div className='errors'>
                     {loginErrors.password}
                  </div>
                  <StyledLabels>
                     Password
                  </StyledLabels>
                  <StyledInputs
                     type='text'
                     id='input-pass'
                     name='password'
                     value={valuesLogin.password}
                     onChange={onChangeLogin}
                  />

               </div>
               {/*Stretch: Login button needs to go through the array of known users and either 1) go to the known user's created character page or 2) throw an error that the user has not signed up 
               
               Possibly make a function with the disabled property
               */}

               {/* Need to make the to={link} for the specified user account */}
               <StyledLoginSignupBtnDiv>
                  <Link to={`/login`} className='loginLink'>
                     <StyledButtons>
                        Login
                     </StyledButtons>
                  </Link>
               </StyledLoginSignupBtnDiv>
            </div>
         </StyledForm>

         <div className='signUp'>
            <div className='signup-div loginPage'>
               <StyledH2>
                  Sign Up
               </StyledH2>
               <p className='signup-p'>
                  If you would like to save your characters and/or NPCs, please sign up to create an account.
               </p>
               <StyledLoginSignupBtnDiv>
                  <Link to={`/login/signup`} className='signUpLink'>
                     <StyledButtons>
                        Sign Up
                     </StyledButtons>
                  </Link>
               </StyledLoginSignupBtnDiv>
            </div>
         </div>

         <Footer />
      </>
   )
}