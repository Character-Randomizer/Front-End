import React, { useContext } from 'react';

import { Header, Footer } from './header-footer'
import StyledButtons from '../styles/buttonStyles';

//Icons for showing or not showing password:
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

//State Management - Context API
import { UserContext } from '../contextAPI';


export default function Account(props) {
   const userContext = useContext(UserContext)

   //Need to figure out a way to make the 'edit' buttons switch the user info into inputs with user info populated
   //User can edit the input fields
   //Create a 'save' button
   //On the click for 'save', the new information is edited for the user (axios request)
   //and the input fields return to the information text with the new inputted information from the user
   const { disabled,
      setDisabled } = props

   console.log(`Account User:`, userContext.user)
   console.log(disabled)

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

   const handleEdit = () => {
      setDisabled(false)
   }

   const handleSave = () => {
      // setUser()
      setDisabled(true)
   }

   const handleDelete = () => {
      return null
   }

   return (
      <>
         <Header />

         <h1>{userContext.user.first_name},</h1>
         <h1>This page is under construction.</h1>

         <h1 className='account-welcome'>Welcome back {userContext.user.first_name}</h1>

         {disabled ?
            <>
               <p className='account-titles'>Name</p>
               <p className='account-info'>{userContext.user.first_name} {userContext.user.last_name}</p>

               <p className='account-titles'>Username</p>
               <p className='account-info'>{userContext.user.username}</p>

               <p className='account-titles'>Email</p>
               <p className='account-info'>{userContext.user.email}</p>

               <p className='account-titles'>Birthday</p>
               <p className='account-info'>{getMonth(dobMonth)} {dobDay}, {dobYear}</p>

               <StyledButtons className='account-edit-btn' onClick={handleEdit}>Edit</StyledButtons>
            </>
            :
            <>
               <p>Edit button was clicked</p>
               <StyledButtons onClick={(handleSave)}>Save</StyledButtons>
               <StyledButtons onClick={null}>Delete</StyledButtons>
            </>
         }

         <Footer />
      </>
   )
}