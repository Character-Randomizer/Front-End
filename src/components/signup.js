import React, { useState, useContext } from 'react';
import * as yup from 'yup'

//Authorization:
import axiosWithAuth from '../authorization/axiosWithAuth';

import { Header, Footer } from './header-footer'

//For the terms of service:
import { termsText1, termsText2, termsText3, termsText4, termsText5 } from './termsText';

//initial Values for state:
import { initialSignupValues } from '../variables/stateVariables';

//Form Validation:
import { formSchemaSignup } from '../validation/formSchemas';

//Styles:
import StyledButtons from '../styles/buttonStyles';
import { StyledForm, VisibilityDiv } from '../styles/loginPageStyles'
import { StyledH2, StyledDivWidth60, StyledDivWidth100, StyledTermLabel, StyledInputs, StyledTermInput, StyledDobInput, StyledLabels } from '../styles/signup-page'

//Icons for showing or not showing password:
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

//State Management - Context API
import { UserContext } from '../contextAPI';


// Want to make sure that the sign up form gets scrubbed when clicking on another link

export default function SignUp(props) {
   const userContext = useContext(UserContext)
   const user = userContext.user

   const { setAccountValues,
      handleShowPass,
      setUser,
      signupFormValues,
      setSignupFormValues,
      navigate } = props

   const [signupErrors, setSignupErrors] = useState(initialSignupValues)

   const onChangeSignup = event => {
      const { name, value, checked, type } = event.target

      const valueUsed = type === 'checkbox' ? checked : value;

      changeInputSignup(name, valueUsed)
   }

   const handleMouseDownPass = (event) => {
      event.preventDefault()
   }

   //Validation Errors + changing input for Sign Up Page:
   const changeInputSignup = (name, value) => {
      yup
         .reach(formSchemaSignup, name)
         .validate(value)
         .then(() => {
            setSignupErrors({ ...signupErrors, [name]: '' })
         })
         .catch(err => {
            setSignupErrors({ ...signupErrors, [name]: err.errors })
         })

      setSignupFormValues({ ...signupFormValues, [name]: value })
   }

   //Posting a new user to the user api when Signing Up
   const registerNewUser = (newUser) => {
      axiosWithAuth()
         .post('/auth/register', newUser)
         .then(res => {
            setUser(res.data.user)
            setAccountValues(res.data.user)
            localStorage.setItem('token', res.data.token)

            setSignupFormValues(initialSignupValues)
            setSignupErrors(initialSignupValues)

            navigate(`/${res.data.user.user_id}/created-characters`)

            return user
         })
         .catch(err => {
            console.log(err)

            if (err.response.status === 500) {
               setSignupErrors({ ...signupErrors, username: 'That username already exists. Please pick another one.' })
            }
            else if (err.response.status === 400) {
               setSignupErrors({ ...signupErrors, 'request_err': "You must complete all required fields before submitting" })
            }
         })
   }

   const submitNewUser = event => {
      event.preventDefault()

      const newUser = {
         first_name: signupFormValues.first_name,
         last_name: signupFormValues.last_name,
         username: signupFormValues.username,
         password: signupFormValues.password,
         email: signupFormValues.email,
         terms: signupFormValues.terms,
         dob: signupFormValues.dob,
      }

      registerNewUser(newUser)
   }

   return (
      <>
         <Header />

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
                     value={signupFormValues.first_name}
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
                     value={signupFormValues.last_name}
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
                     value={signupFormValues.username}
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
                     value={signupFormValues.email}
                     onChange={onChangeSignup}
                     placeholder='Email'
                  />
               </StyledDivWidth60>
               <StyledDivWidth60>
                  <div className='errors'>
                     {signupErrors.password}
                  </div>
                  <StyledInputs
                     type={signupFormValues.showPass ? 'text' : 'password'}
                     id='input-pass'
                     name='password'
                     value={signupFormValues.password}
                     onChange={onChangeSignup}
                     placeholder='Password'
                  />
                  <VisibilityDiv
                     onClick={(id) => {
                        handleShowPass(id = `input-pass-icon`)
                     }}
                     onMouseDown={handleMouseDownPass}
                  >
                     {signupFormValues.showPass ? <VisibilityOff /> : <Visibility />}
                  </VisibilityDiv>
               </StyledDivWidth60>
               <StyledDivWidth60>
                  <div className='errors'>
                     {signupErrors.confirm_password}
                  </div>
                  <StyledInputs
                     type={signupFormValues.showConfirm ? 'text' : 'password'}
                     id='input-confirm-pass'
                     name='confirm_password'
                     value={signupFormValues.confirm_password}
                     onChange={onChangeSignup}
                     placeholder='Confirm password'
                  />
                  <VisibilityDiv
                     onClick={(id) => {
                        handleShowPass(id = `input-confirm-pass-icon`)
                     }}
                     onMouseDown={handleMouseDownPass}
                  >
                     {signupFormValues.showConfirm ? <VisibilityOff /> : <Visibility />}
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
                     value={signupFormValues.dob}
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
                     value={signupFormValues.terms}
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