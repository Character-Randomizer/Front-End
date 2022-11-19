import React, { useContext, useState } from 'react';

import { Header, Footer } from './header-footer'
import StyledButtons from '../styles/buttonStyles';
import DeletePopup from './acctDeletePopup';

//Icons for showing or not showing password:
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

//State Management - Context API
import { UserContext } from '../contextAPI';


export default function Account(props) {
   const userContext = useContext(UserContext)

   const { disabledButton,
      setDisabledButton,
      changeAccount,
      valuesAccount,
      accountErrors,
      saveAccount,
      deleteAccount } = props

   const user = userContext.user

   //functions for getting birthdate in a correct format (Month Day, Year)
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

   const dobStr = user.dob
   const dob = dobStr.split('T')[0]
   const dobParts = dob.split('-')
   const dobYear = dobParts[0]
   const dobMonth = dobParts[1]
   const dobDay = dobParts[2]

   //functions for buttons
   const handleEdit = () => {
      setDisabledButton(false)
   }

   //functions for inputs once user is editing
   const onChange = (event) => {
      const { name, value } = event.target

      changeAccount(name, value)
   }


   return (
      <>
         <Header />
         <h1 className='account-welcome'>Welcome back {user.first_name}</h1>

         {disabledButton ?
            <>
               <p className='account-titles'>Name</p>
               <p className='account-info'>{user.first_name} {user.last_name}</p>

               <p className='account-titles'>Username</p>
               <p className='account-info'>{user.username}</p>

               <p className='account-titles'>Email</p>
               <p className='account-info'>{user.email}</p>

               <p className='account-titles'>Birthday</p>
               <p className='account-info'>
                  {getMonth(dobMonth)} {dobDay}, {dobYear}
               </p>

               <StyledButtons className='account-edit-btn' onClick={handleEdit}>Edit</StyledButtons>
            </>
            :
            <>
               <form >
                  <p className='account-titles'>First Name</p>
                  <div className='errors'>
                     {accountErrors.first_name}
                  </div>
                  <input
                     className='input-account-first-name'
                     type='text'
                     name='first_name'
                     value={valuesAccount.first_name}
                     onChange={onChange}
                  />

                  <p className='account-titles'>Last Name</p>
                  <div className='errors'>
                     {accountErrors.last_name}
                  </div>
                  <input
                     className='input-account-last-name'
                     type='text'
                     name='last_name'
                     value={valuesAccount.last_name}
                     onChange={onChange}
                  />

                  <p className='account-titles'>Username</p>
                  <div className='errors'>
                     {accountErrors.username}
                  </div>
                  <input
                     className='input-account-un'
                     type='text'
                     name='username'
                     value={valuesAccount.username}
                     onChange={onChange}
                  />

                  <p className='account-titles'>Email</p>
                  <div className='errors'>
                     {accountErrors.email}
                  </div>
                  <input
                     className='input-account-email'
                     type='text'
                     name='email'
                     value={valuesAccount.email}
                     onChange={onChange}
                  />

                  <p className='account-titles'>Birthday</p>
                  <div className='errors'>
                     {accountErrors.dob}
                  </div>
                  <input
                     type='date'
                     id='input-dob'
                     name='dob'
                     min='1900-01-01'
                     value={valuesAccount.dob.split('T')[0]}
                     onChange={onChange}
                  />

                  <div className='errors'>
                     {accountErrors.request_err}
                  </div>
                  <StyledButtons id='save-btn' onClick={saveAccount}>Save</StyledButtons>

                  <DeletePopup
                     user={user}
                     deleteAccount={deleteAccount}
                  />

               </form>
            </>
         }

         <Footer />
      </>
   )
}