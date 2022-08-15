import React from 'react';

import { Header, Footer } from './header-footer'

export default function CreatedCharPage(props) {
   const { user } = props

   console.log(user)

   return (
      <>
         <Header />

         <h1>{user.first_name}</h1>
         <h1>This page is under construction.</h1>

         <Footer />
      </>
   )
}