import React from 'react';

import { Header, Footer } from './header-footer'
import { termsText1, termsText2, termsText3, termsText4, termsText5 } from './termsText';
import StyledButtons from '../styles/buttonStyles';
import { StyledForm, VisibilityDiv } from '../styles/loginPageStyles'
import { StyledH2, StyledDivWidth60, StyledDivWidth100, StyledTermLabel, StyledInputs, StyledTermInput, StyledDobInput, StyledLabels } from '../styles/signup-page'

//Icons for showing or not showing password:
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export default function SignUp(props) {
   const { changeSignup, valuesSignup, signupErrors, submitNewUser, handleShowPass, handleShowConfirm, user } = props

   const onChangeSignup = event => {
      const { name, value, checked, type } = event.target

      const valueUsed = type === 'checkbox' ? checked : value;

      changeSignup(name, valueUsed)
   }

   const handleMouseDownPass = (event) => {
      event.preventDefault()
   }

   return (
      <>
         <Header user={user} />

         <StyledForm onSubmit={submitNewUser}>
            <div className='signup-div signupPage'>
               <StyledH2>
                  Sign Up
               </StyledH2>
               <p className='signup-p'>
                  If you would like to save your characters and/or NPCs, sign up to create an account.
                  <br />
               </p>
               <StyledDivWidth60>
                  <div className='errors'>
                     {signupErrors.first_name}
                  </div>
                  <StyledInputs
                     type='text'
                     id='input-first-name'
                     name='first_name'
                     value={valuesSignup.first_name}
                     onChange={onChangeSignup}
                     placeholder='First Name'
                  />
               </StyledDivWidth60>
               <StyledDivWidth60>
                  <div className='errors'>
                     {signupErrors.last_name}
                  </div>
                  <StyledInputs
                     type='text'
                     id='input-last-name'
                     name='last_name'
                     value={valuesSignup.last_name}
                     onChange={onChangeSignup}
                     placeholder='Last Name'
                  />
               </StyledDivWidth60>
               <StyledDivWidth60>
                  <div className='errors'>
                     {signupErrors.username}
                  </div>
                  <StyledInputs
                     type='text'
                     id='input-un'
                     name='username'
                     value={valuesSignup.username}
                     onChange={onChangeSignup}
                     placeholder='Username'
                  />
               </StyledDivWidth60>
               <StyledDivWidth60>
                  <div className='errors'>
                     {signupErrors.email}
                  </div>
                  <StyledInputs
                     type='email'
                     id='input-email'
                     name='email'
                     value={valuesSignup.email}
                     onChange={onChangeSignup}
                     placeholder='Email'
                  />
               </StyledDivWidth60>
               <StyledDivWidth60>
                  <div className='errors'>
                     {signupErrors.password}
                  </div>
                  <StyledInputs
                     type={valuesSignup.showPass ? 'text' : 'password'}
                     id='input-pass'
                     name='password'
                     value={valuesSignup.password}
                     onChange={onChangeSignup}
                     placeholder='Password'
                  />
                  <VisibilityDiv
                     onClick={handleShowPass}
                     onMouseDown={handleMouseDownPass}
                  >
                     {valuesSignup.showPass ? <VisibilityOff /> : <Visibility />}
                  </VisibilityDiv>
               </StyledDivWidth60>
               <StyledDivWidth60>
                  <div className='errors'>
                     {signupErrors.confirm_password}
                  </div>
                  <StyledInputs
                     type={valuesSignup.showConfirm ? 'text' : 'password'}
                     id='input-confirm-pass'
                     name='confirm_password'
                     value={valuesSignup.confirm_password}
                     onChange={onChangeSignup}
                     placeholder='Confirm password'
                  />
                  <VisibilityDiv
                     onClick={handleShowConfirm}
                     onMouseDown={handleMouseDownPass}
                  >
                     {valuesSignup.showConfirm ? <VisibilityOff /> : <Visibility />}
                  </VisibilityDiv>
               </StyledDivWidth60>
               <StyledDivWidth100>
                  <div className='errors'>
                     {signupErrors.dob}
                  </div>
                  <StyledLabels>
                     Date of Birth
                  </StyledLabels>
                  <StyledDobInput
                     type='date'
                     id='input-dob'
                     name='dob'
                     min='1900-01-01'
                     value={valuesSignup.dob}
                     onChange={onChangeSignup}
                  />
               </StyledDivWidth100>
               <StyledDivWidth100>
                  <div className='errors'>
                     {signupErrors.terms}
                  </div>
                  <StyledTermLabel>
                     Terms of Service
                  </StyledTermLabel>
                  <div className='p-terms'>
                     <p>
                        {termsText1}
                     </p>
                     <p>
                        {termsText2}
                     </p>
                     <p>
                        {termsText3}
                     </p>
                     <p>
                        {termsText4}
                     </p>
                     <p>
                        {termsText5}
                     </p>
                  </div>
                  <p>By clicking the box, I agree to the terms of service</p>
                  <StyledTermInput
                     type='checkbox'
                     id='input-terms'
                     name='terms'
                     value={valuesSignup.terms}
                     onChange={onChangeSignup}
                  />

               </StyledDivWidth100>

               <div className='errors'>
                  {signupErrors.request_err}
               </div>
               <StyledButtons>
                  Sign Up
               </StyledButtons>
            </div>
         </StyledForm>

         <Footer user={user} />
      </>
   )
}