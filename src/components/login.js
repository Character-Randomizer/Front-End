import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import * as yup from 'yup'

//Authorization:
import axiosWithAuth from '../authorization/axiosWithAuth';

import { Header, Footer } from './header-footer'

//intial values for state:
import { initialLoginValues } from '../variables/stateVariables';

//Form Validation:
import { formSchemaLogin } from '../validation/formSchemas';

//Styles:
import { StyledForm, StyledLabels, StyledH2, StyledLoginSignupBtnDiv, StyledInputs, VisibilityDiv } from '../styles/loginPageStyles'
import StyledButtons from '../styles/buttonStyles'

//Icons for showing or not showing password:
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export default function Login(props) {
   const { setUser,
      navigate,
      handleShowPass,
      loginValues,
      setLoginValues,
      setAccountValues } = props

   const [loginErrors, setLoginErrors] = useState(initialLoginValues)

   const onChangeLogin = event => {
      const { name, value } = event.target

      changeInputLogin(name, value)
   }

   const handleMouseDownPass = (event) => {
      event.preventDefault()
   }

   //Validation Errors + changing input for Login Page:
   const changeInputLogin = (name, value) => {
      yup
         .reach(formSchemaLogin, name)
         .validate(value)
         .then(() => {
            setLoginErrors({ ...loginErrors, [name]: '' })
         })
         .catch(err => {
            setLoginErrors({ ...loginErrors, [name]: err.errors })
         })

      setLoginValues({ ...loginValues, [name]: value })
   }


   //Logging in the user with backend api:
   const loginUser = userInfo => {
      axiosWithAuth()
         .post(`/auth/login`, userInfo)
         .then(res => {
            setUser(res.data.user)
            setAccountValues(res.data.user)
            localStorage.setItem('token', res.data.token)

            if (res.data.message === `Welcome back ${res.data.user.username}`) {
               return (
                  //Real navigate:
                  navigate(`/${res.data.user.user_id}/created-characters`)
               )
            }
         })
         .catch((err) => {
            setLoginErrors({ ...loginErrors, 'request_err': 'Invalid Credentials, please try again or sign up' })
         })
         .finally(() => {
            setLoginValues(initialLoginValues)
            setLoginErrors(initialLoginValues)
         })
   }

   const loginSubmit = event => {
      event.preventDefault()

      const userInfo = {
         username: loginValues.username,
         password: loginValues.password
      }

      loginUser(userInfo)
   }


   return (
      <>
         <Header />

         <StyledForm onSubmit={loginSubmit}>
            <div className='login-div'>
               <StyledH2>
                  Login
               </StyledH2>
               <div className='loginDivInput'>
                  <StyledLabels>
                     Username
                  </StyledLabels>
                  <StyledInputs
                     type='text'
                     id='input-un'
                     name='username'
                     value={loginValues.username}
                     onChange={onChangeLogin}
                  />
                  <div className='errors'>
                     {loginErrors.username}
                  </div>
               </div>

               <div className='loginDivInput'>
                  <StyledLabels>
                     Password
                  </StyledLabels>
                  <StyledInputs
                     type={loginValues.showPass ? 'text' : 'password'}
                     id='input-pass'
                     name='password'
                     value={loginValues.password}
                     onChange={onChangeLogin}
                  />
                  <VisibilityDiv
                     onClick={handleShowPass}
                     onMouseDown={handleMouseDownPass}
                  >
                     {loginValues.showPass ? <VisibilityOff /> : <Visibility />}
                  </VisibilityDiv>
                  <div className='errors'>
                     {loginErrors.password}
                  </div>
               </div>

               <StyledLoginSignupBtnDiv>
                  <StyledButtons>
                     Login
                  </StyledButtons>
                  <div className='errors'>
                     {loginErrors.request_err}
                  </div>
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