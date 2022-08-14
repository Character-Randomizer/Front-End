import React from 'react';
import { Link } from 'react-router-dom'

import { Header, Footer } from './header-footer'
import StyledButtons from '../styles/buttonStyles';
import { StyledForm, StyledInputs, StyledLabels } from '../styles/login-signupStyles'
import { StyledH2, StyledDivWidth50, StyledDivWidth100 } from '../styles/signup-page'


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
               <StyledDivWidth50>
                  <div className='errors'>
                     {signupErrors.first_name}
                  </div>
                  <StyledLabels>
                     First Name
                  </StyledLabels>
                  <StyledInputs
                     type='text'
                     id='input-first-name'
                     name='first_name'
                     value={valuesSignup.first_name}
                     onChange={onChangeSignup}
                  />
               </StyledDivWidth50>
               <StyledDivWidth50>
                  <div className='errors'>
                     {signupErrors.last_name}
                  </div>
                  <StyledLabels>
                     Last Name
                  </StyledLabels>
                  <StyledInputs
                     type='text'
                     id='input-last-name'
                     name='last_name'
                     value={valuesSignup.last_name}
                     onChange={onChangeSignup}
                  />
               </StyledDivWidth50>
               <StyledDivWidth50>
                  <div className='errors'>
                     {signupErrors.username}
                  </div>
                  <StyledLabels>
                     Username
                  </StyledLabels>
                  <StyledInputs
                     type='text'
                     id='input-un'
                     name='username'
                     value={valuesSignup.username}
                     onChange={onChangeSignup}
                  />
               </StyledDivWidth50>
               <StyledDivWidth50>
                  <div className='errors'>
                     {signupErrors.email}
                  </div>
                  <StyledLabels>
                     Email
                  </StyledLabels>
                  <StyledInputs
                     type='email'
                     id='input-email'
                     name='email'
                     value={valuesSignup.email}
                     onChange={onChangeSignup}
                  />
               </StyledDivWidth50>
               <StyledDivWidth50>
                  <div className='errors'>
                     {signupErrors.password}
                  </div>
                  <StyledLabels>
                     Password
                  </StyledLabels>
                  <StyledInputs
                     type='text'
                     id='input-pass'
                     name='password'
                     value={valuesSignup.password}
                     onChange={onChangeSignup}
                  />
               </StyledDivWidth50>
               <StyledDivWidth50>
                  <div className='errors'>
                     {signupErrors.confirm_password}
                  </div>
                  <StyledLabels>
                     Confirm Password
                  </StyledLabels>
                  <StyledInputs
                     type='text'
                     id='input-confirm-pass'
                     name='confirm_password'
                     value={valuesSignup.confirm_password}
                     onChange={onChangeSignup}
                  />
               </StyledDivWidth50>
               <StyledDivWidth100>
                  <div className='errors'>
                     {signupErrors.terms}
                  </div>
                  <StyledLabels>
                     Terms of Service
                  </StyledLabels>
                  <div className='p-terms'>
                     <p>
                        Lorem ipsum terms
                     </p>
                  </div>
                  <StyledInputs
                     type='checkbox'
                     id='input-terms'
                     name='terms'
                     value={valuesSignup.terms}
                     onChange={onChangeSignup}
                  />
               </StyledDivWidth100>
               <StyledDivWidth100>
                  <div className='errors'>
                     {signupErrors.dob}
                  </div>
                  <StyledLabels>
                     Date of Birth
                  </StyledLabels>
                  <StyledInputs
                     type='date'
                     id='input-dob'
                     name='dob'
                     min='1900-01-01'
                     value={valuesSignup.dob}
                     onChange={onChangeSignup}
                  />
               </StyledDivWidth100>

               {/*Stretch: Sign Up button needs to go through the array of known users and either 1) create the new user and then go to the new user's created character page or 2) throw an error that the user has an account
               
               Possibly make a function with the disabled property
               */}

               {/* Need to make the to={link} for the specified user account */}
               {/* <Link className='signup-btn' to={`/account`}> */}
               <StyledButtons>Sign Up</StyledButtons>
               {/* </Link> */}
            </div>
         </StyledForm>

         <Footer />
      </>
   )
}