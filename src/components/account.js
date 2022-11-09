import React from 'react';

import { UserHeader, UserFooter } from './header-footer'

export default function Account(props) {
   const { user } = props
   return (
      <>
         <UserHeader />

         <h1>{user.first_name},</h1>
         <h1>This page is under construction.</h1>

         <UserFooter />
      </>
   )
}