import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

import { Header, Footer } from './header-footer'
import { StyledForm, StyledLabels, StyledH2, StyledLoginSignupBtnDiv, StyledInputs, VisibilityDiv } from '../styles/loginPageStyles'
import StyledButtons from '../styles/buttonStyles'

//Icons for showing or not showing password:
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

//State Management - Context API
import { UserContext } from '../contextAPI';

export default function Login(props) {
   const userContext = useContext(UserContext)

   const { changeLogin,
      valuesLogin,
      loginErrors,
      submitLogin,
      handleShowPass } = props

   const onChangeLogin = event => {
      const { name, value } = event.target

      changeLogin(name, value)
   }

   const handleMouseDownPass = (event) => {
      event.preventDefault()
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
                     type={valuesLogin.showPass ? 'text' : 'password'}
                     id='input-pass'
                     name='password'
                     value={valuesLogin.password}
                     onChange={onChangeLogin}
                  />
                  <VisibilityDiv
                     onClick={handleShowPass}
                     onMouseDown={handleMouseDownPass}
                  >
                     {valuesLogin.showPass ? <VisibilityOff /> : <Visibility />}
                  </VisibilityDiv>
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
               <p className='signup-p'>
                  If you would like to save your characters and/or NPCs, hit the sign up button to create an account!
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