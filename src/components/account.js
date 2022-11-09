import React from 'react';

import { Header, Footer } from './header-footer'

export default function Account(props) {
   const { user } = props
   return (
      <>
         <Header user={user} />

         <h1>{user.first_name},</h1>
         <h1>This page is under construction.</h1>

         <Footer user={user} />
      </>
   )
}