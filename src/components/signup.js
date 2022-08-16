import React from 'react';

import { Header, Footer } from './header-footer'
import { termsText1, termsText2, termsText3, termsText4, termsText5 } from './termsText';
import StyledButtons from '../styles/buttonStyles';
import { StyledForm } from '../styles/loginPageStyles'
import { StyledH2, StyledDivWidth60, StyledDivWidth100, StyledTermLabel, StyledInputs, StyledTermInput, StyledDobInput, StyledLabels } from '../styles/signup-page'


export default function SignUp(props) {
   const { changeSignup, valuesSignup, signupErrors, submitNewUser } = props

   const onChangeSignup = event => {
      const { name, value, checked, type } = event.target

      const valueUsed = type === 'checkbox' ? checked : value;

      changeSignup(name, valueUsed)
   }

   return (
      <>
         <Header />

         <StyledForm onSubmit={submitNewUser}>
            <div className='signup-div signupPage'>
               <StyledH2>
                  Sign Up
               </StyledH2>
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
                     type='text'
                     id='input-pass'
                     name='password'
                     value={valuesSignup.password}
                     onChange={onChangeSignup}
                     placeholder='Password'
                  />
               </StyledDivWidth60>
               <StyledDivWidth60>
                  <div className='errors'>
                     {signupErrors.confirm_password}
                  </div>
                  <StyledInputs
                     type='text'
                     id='input-confirm-pass'
                     name='confirm_password'
                     value={valuesSignup.confirm_password}
                     onChange={onChangeSignup}
                     placeholder='Confirm password'
                  />
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

         <Footer />
      </>
   )
}