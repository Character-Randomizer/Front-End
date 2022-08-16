import React from 'react';
import { Link } from 'react-router-dom'

import { Header, Footer } from './header-footer'
import { StyledForm, StyledLabels, StyledH2, StyledLoginSignupBtnDiv, StyledInputs } from '../styles/loginPageStyles'
import StyledButtons from '../styles/buttonStyles'

export default function Login(props) {
   const { changeLogin, valuesLogin, loginErrors, submitLogin } = props

   const onChangeLogin = event => {
      const { name, value } = event.target

      changeLogin(name, value)
   }

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

               <StyledLoginSignupBtnDiv>
                  <div className='errors'>
                     {loginErrors.request_err}
                  </div>
                  <StyledButtons>
                     Login
                  </StyledButtons>
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
                  <Link to={`/signup`} className='signUpLink'>
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