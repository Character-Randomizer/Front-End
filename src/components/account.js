import React, { useContext } from 'react';

import { Header, Footer } from './header-footer'

//State Management - Context API
import { UserContext } from '../contextAPI';

export default function Account() {
   const userContext = useContext(UserContext)

   return (
      <>
         <Header />

         <h1>{userContext.user.first_name},</h1>
         <h1>This page is under construction.</h1>

         <Footer />
      </>
   )
}