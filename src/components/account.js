import React, { useContext, useState, useEffect } from 'react';
import * as yup from 'yup'

//authorization:
import axiosWithAuth from '../authorization/axiosWithAuth';

import { Header, Footer } from './header-footer'

//Popup once the user hits the delete button:
import DeletePopup from './acctDeletePopup';

//initial values for state:
import { initialSignupValues, initialDisabled, initialUser } from '../variables/stateVariables';

//form validaiton:
import { formSchemaAccount } from '../validation/formSchemas';

//Icons for showing or not showing password:
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { VisibilityDiv } from '../styles/loginPageStyles';
import StyledButtons from '../styles/buttonStyles';

//State Management - Context API
import { UserContext } from '../contextAPI';


export default function Account(props) {
   const userContext = useContext(UserContext)

   const [accountErrors, setAccountErrors] = useState(initialSignupValues)
   const [disabled, setDisabled] = useState(initialDisabled)
   const [disabledButton, setDisabledButton] = useState(initialDisabled)

   const { accountValues,
      setAccountValues,
      handleShowPass,
      navigate,
      setUser } = props

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
      setAccountValues({ ...accountValues, 'password': '' })
   }

   //Validation Errors + changing input for Account Page:
   const changeInputAccount = (name, value) => {
      yup
         .reach(formSchemaAccount, name)
         .validate(value)
         .then(() => {
            setAccountErrors({ ...accountErrors, [name]: '' })
         })
         .catch(err => {
            setAccountErrors({ ...accountErrors, [name]: err.errors })
         })

      setAccountValues({ ...accountValues, [name]: value })
   }

   useEffect(() => {
      formSchemaAccount.isValid(accountValues).then(validate => {
         setDisabled(!validate)
      })
   }, [accountValues])


   //functions for inputs once user is editing
   const onChange = (event) => {
      const { name, value } = event.target

      changeInputAccount(name, value)
   }

   //Cancel button on Click handler:
   const handleCancel = () => {
      setDisabledButton(true)
      setAccountValues(user)
      setAccountErrors(initialSignupValues)
   }

   //Account submit on save:
   const accountSave = event => {
      event.preventDefault()

      const updatedUser = { user_id: user.user_id }
      const valueKeys = Object.keys(accountValues).slice(1, 7)

      valueKeys.forEach(key => {
         switch (key) {
            case 'first_name':
               if (accountValues.first_name !== user.first_name) {
                  updatedUser.first_name = accountValues.first_name
               }
               return;
            case 'last_name':
               if (accountValues.last_name !== user.last_name) {
                  updatedUser.last_name = accountValues.last_name
               }
               return;
            case 'username':
               if (accountValues.username !== user.username) {
                  updatedUser.username = accountValues.username
               }
               return;
            case 'email':
               if (accountValues.email !== user.email) {
                  updatedUser.email = accountValues.email
               }
               return;
            case 'dob':
               if (accountValues.dob !== user.dob) {
                  updatedUser.dob = accountValues.dob
               }
               return;
            case 'password':
               if (accountValues.password !== '' && accountValues.password === accountValues.confirm_password) {
                  updatedUser.password = accountValues.password
               }
               else if (accountValues.password !== '' && accountValues.password !== accountValues.confirm_password) {
                  setAccountErrors({ ...accountErrors, confirm_password: `Passwords do not match` })
               }
               return;
            default:
               console.log('Nothing to see here!')
               return;
         }
      })

      saveUser(updatedUser)
   }

   const saveUser = (updatedUser) => {
      axiosWithAuth()
         .put(`users/${user.user_id}`, updatedUser)
         .then(res => {
            setUser(res.data)
            setDisabledButton(!disabledButton)
            setAccountErrors(initialSignupValues)
         })
         .catch(err => {
            console.log(`Error:`, err)

            setAccountErrors({ ...accountErrors, 'request_err': `You must change something before saving. \n If you clicked edit on accident, feel free to click the cancel button.` })
         })
   }

   //Account submit on delete:
   const accountDelete = deleteUser => {
      console.log(`Delete button was clicked. ${user.username} was deleted.`)

      axiosWithAuth()
         .delete(`users/${user.user_id}`, deleteUser)
         .then(res => {
            localStorage.removeItem(`token`)
            setUser(initialUser)
            setDisabledButton(!disabledButton)
            navigate(`/`)
         })
         .catch(err => {
            console.log(`App.js DELETE request error:`, err)
         })
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
                     value={accountValues.first_name}
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
                     value={accountValues.last_name}
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
                     value={accountValues.username}
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
                     value={accountValues.email}
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
                     value={accountValues.dob.split('T')[0]}
                     onChange={onChange}
                  />

                  <p className='account-titles'>Change your password</p>
                  <div className='errors'>
                     {accountErrors.password}
                  </div>
                  <input
                     type={accountValues.showPass ? 'text' : 'password'}
                     id='input-pass'
                     name='password'
                     value={accountValues.password}
                     onChange={onChange}
                     placeholder='Change Password'
                  />
                  <VisibilityDiv
                     onClick={(id) => {
                        handleShowPass(id = `input-pass-icon`)
                     }}
                  >
                     {accountValues.showPass ? <VisibilityOff /> : <Visibility />}
                  </VisibilityDiv>
                  <div className='errors'>
                     {accountErrors.confirm_password}
                  </div>
                  <input
                     type={accountValues.showConfirm ? 'text' : 'password'}
                     id='input-confirm-pass'
                     name='confirm_password'
                     value={accountValues.confirm_password}
                     onChange={onChange}
                     placeholder='Confirm Password'
                  />
                  <VisibilityDiv
                     onClick={(id) => {
                        handleShowPass(id = `input-confirm-pass-icon`)
                     }}
                  >
                     {accountValues.showConfirm ? <VisibilityOff /> : <Visibility />}
                  </VisibilityDiv>

                  <div className='errors'>
                     {accountErrors.request_err}
                  </div>

                  <StyledButtons id='cancel-btn' onClick={() => handleCancel()}>
                     Cancel
                  </StyledButtons>

                  <StyledButtons id='save-btn' onClick={accountSave}>Save</StyledButtons>

                  <DeletePopup
                     user={user}
                     deleteAccount={accountDelete}
                  />

               </form>
            </>
         }

         <Footer />
      </>
   )
}