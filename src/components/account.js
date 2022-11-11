import React, { useContext } from 'react';

import { Header, Footer } from './header-footer'

//State Management - Context API
import { UserContext } from '../contextAPI';

export default function Account() {
   const userContext = useContext(UserContext)

   const getMonth = month => {
      switch (month) {
         case '01':
            return 'January';
         case '02':
            return 'February';
         case '03':
            return 'March';
         case '04':
            return 'April';
         case '05':
            return 'May';
         case '06':
            return 'June';
         case '07':
            return 'July';
         case '08':
            return 'August';
         case '09':
            return 'September';
         case '10':
            return 'October';
         case '11':
            return 'November';
         case '12':
            return 'December';
         default:
            return ''
      }
   }

   const dobStr = userContext.user.dob
   const dob = dobStr.split('T')[0]
   const dobParts = dob.split('-')
   const dobYear = dobParts[0]
   const dobMonth = dobParts[1]
   const dobDay = dobParts[2]

   // const editInfo = (id) => {
   //    if(id === 'name-edit'){

   //    }
   // }

   return (
      <>
         <Header />

         <h1>{userContext.user.first_name},</h1>
         <h1>This page is under construction.</h1>

         <h1 className='account-welcome'>Welcome back {userContext.user.first_name}</h1>

         <p className='account-titles'>Name</p>
         <button className='account-edit-btn name-edit' onClick={null}>Edit</button>
         <p className='account-info'>{userContext.user.first_name} {userContext.user.last_name}</p>

         <p className='account-titles'>Username</p>
         <button className='account-edit-btn un-edit' onClick={null}>Edit</button>

         <p className='account-info'>{userContext.user.username}</p>

         <p className='account-titles'>Email</p>
         <button className='account-edit-btn email-edit' onClick={null}>Edit</button>
         <p className='account-info'>{userContext.user.email}</p>

         <p className='account-titles'>Change Password?</p>
         <button className='changePass pass-edit' onClick={null}>Change Password</button>

         <p className='account-titles'>Birthday</p>
         <button className='account-edit-btn dob-edit' onClick={null}>Edit</button>
         <p className='account-info'>{getMonth(dobMonth)} {dobDay}, {dobYear}</p>


         <Footer />
      </>
   )
}