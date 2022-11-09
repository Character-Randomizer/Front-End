import React from 'react';
import { Navigate } from 'react-router';

import { UserHeader, Footer } from './header-footer'

export default function CreatedCharPage(props) {
   const { user } = props

   //After a refresh, the user is no longer in state for some reason. May need to preventDefault()?
   console.log(user)


   if (!window.localStorage.getItem('token')) {
      return <Navigate to='/login' />
   }

   return (
      <>
         <UserHeader />

         <h1>{user.first_name},</h1>
         <h1>This page is under construction.</h1>

         <Footer />
      </>
   )
}