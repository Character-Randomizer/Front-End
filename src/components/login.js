import React from 'react';
import { Link } from 'react-router-dom'

import { Header, Footer } from './header-footer'

export default function Login(props) {
   const { changeLogin, valuesLogin, loginErrors } = props

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

         <Footer />
      </>
   )
}