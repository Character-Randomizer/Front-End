import React, { useContext } from 'react';
import { Navigate } from 'react-router';

import { Header, Footer } from './header-footer'

//State Management - Context API
import { UserContext } from '../contextAPI';

export default function CreatedCharPage() {
   const user = useContext(UserContext)

   //After a refresh, the user is no longer in state for some reason. May need to preventDefault()?
   console.log(`Character Page user refresh issue:`, user)


   if (!window.localStorage.getItem('token')) {
      return <Navigate to='/login' />
   }

   return (
      <>
         <Header user={user} />

         <h1>{user.user.first_name},</h1>
         <h1>This page is under construction.</h1>

         <Footer user={user} />
      </>
   )
}