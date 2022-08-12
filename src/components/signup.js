import React from 'react';
import { Link } from 'react-router-dom'

import { Header, Footer } from './header-footer'


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

         <form id='signup-form' onSubmit={submitNewUser}>
            <div className='signup-div'>
               <h2>
                  Sign Up
               </h2>
               <div className='signup-first-name'>
                  <div className='errors'>
                     {signupErrors.first_name}
                  </div>
                  <label>
                     First Name
                     <input
                        type='text'
                        id='input-first-name'
                        name='first_name'
                        value={valuesSignup.first_name}
                        onChange={onChangeSignup}
                     />
                  </label>
               </div>
               <div className='signup-last-name'>
                  <div className='errors'>
                     {signupErrors.last_name}
                  </div>
                  <label>
                     Last Name
                     <input
                        type='text'
                        id='input-last-name'
                        name='last_name'
                        value={valuesSignup.last_name}
                        onChange={onChangeSignup}
                     />
                  </label>
               </div>
               <div className='signup-un'>
                  <div className='errors'>
                     {signupErrors.username}
                  </div>
                  <label>
                     Username
                     <input
                        type='text'
                        id='input-un'
                        name='username'
                        value={valuesSignup.username}
                        onChange={onChangeSignup}
                     />
                  </label>
               </div>
               <div className='signup-pass'>
                  <div className='errors'>
                     {signupErrors.password}
                  </div>
                  <label>
                     Password
                     <input
                        type='text'
                        id='input-pass'
                        name='password'
                        value={valuesSignup.password}
                        onChange={onChangeSignup}
                     />
                  </label>
               </div>
               <div className='signup-confirm-pass'>
                  <div className='errors'>
                     {signupErrors.confirm_password}
                  </div>
                  <label>
                     Confirm Password
                     <input
                        type='text'
                        id='input-confirm-pass'
                        name='confirm_password'
                        value={valuesSignup.confirm_password}
                        onChange={onChangeSignup}
                     />
                  </label>
               </div>
               <div className='signup-email'>
                  <div className='errors'>
                     {signupErrors.email}
                  </div>
                  <label>
                     Email
                     <input
                        type='email'
                        id='input-email'
                        name='email'
                        value={valuesSignup.email}
                        onChange={onChangeSignup}
                     />
                  </label>
               </div>
               <div className='signup-terms'>
                  <div className='errors'>
                     {signupErrors.terms}
                  </div>
                  <label>
                     Terms of Service
                     <div className='p-terms'>
                        <p>
                           Lorem ipsum terms
                        </p>
                     </div>
                     <input
                        type='checkbox'
                        id='input-terms'
                        name='terms'
                        value={valuesSignup.terms}
                        onChange={onChangeSignup}
                     />
                  </label>
               </div>
               <div className='signup-dob'>
                  <div className='errors'>
                     {signupErrors.dob}
                  </div>
                  <label>
                     Date of Birth
                  </label>
                  <input
                     type='date'
                     id='input-dob'
                     name='dob'
                     min='1900-01-01'
                     value={valuesSignup.dob}
                     onChange={onChangeSignup}
                  />
               </div>

               {/*Stretch: Sign Up button needs to go through the array of known users and either 1) create the new user and then go to the new user's created character page or 2) throw an error that the user has an account
               
               Possibly make a function with the disabled property
               */}

               {/* Need to make the to={link} for the specified user account */}
               <Link className='signup-btn' to={`/login/signup`}>
                  <button>Sign Up</button>
               </Link>
            </div>
         </form>

         <Footer />
      </>
   )
}