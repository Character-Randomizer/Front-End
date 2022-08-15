import React from 'react';

import { Header, Footer } from './header-footer'

export default function CreatedCharPage(props) {
   const { user } = props

   return (
      <>
         <Header />

         <h1>{user.username}</h1>
         <h1>This page is under construction.</h1>

         <Footer />
      </>
   )
}