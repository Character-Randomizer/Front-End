import React, { useContext } from 'react';

import { Header, Footer } from './header-footer'

//State Management - Context API
import { UserContext } from '../contextAPI';

export default function Account() {
   const user = useContext(UserContext)

   return (
      <>
         <Header user={user} />

         <h1>{user.user.first_name},</h1>
         <h1>This page is under construction.</h1>

         <Footer user={user} />
      </>
   )
}