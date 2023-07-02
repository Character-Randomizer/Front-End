import React, { useContext } from 'react';
import { Navigate } from 'react-router';

import { Header, Footer } from './header-footer'

//State Management - Context API
import { UserContext } from '../contextAPI';

//Styles
import { SaveCharH3 } from '../styles/homeStyles';

export default function CreatedCharPage() {
   const userContext = useContext(UserContext)

   //After a refresh, the user is no longer in state for some reason. May need to preventDefault()?
   console.log(`Character Page user refresh issue:`, userContext)


   if (!window.localStorage.getItem('token')) {
      return <Navigate to='/login' />
   }

   return (
      <>
         <Header />

         <h1>{userContext.user.first_name},</h1>
         <h1>This page is under construction.</h1>

         <SaveCharH3>
            ** Disclaimer ** 
            <br></br>
            This is still being worked on and is not currently working
         </SaveCharH3>

         <Footer />
      </>
   )
}