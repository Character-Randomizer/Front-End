import React, { useState, useEffect } from 'react';
import * as yup from 'yup'

import { Header, Footer } from './header-footer'
import { initialContactValues } from '../variables/stateVariables';
import { formSchemaContact } from '../validation/formSchemas';

import StyledButtons from '../styles/buttonStyles'
import { StyledFormDiv, StyledInputDiv, StyledContactLabels, StyledInputs, StyledH2 } from '../styles/contactFormStyles';
import { StyledForm } from '../styles/loginPageStyles'


export default function Contact() {
   const [contactFormValues, setContactFormValues] = useState(initialContactValues)
   const [contactErrors, setContactErrors] = useState(initialContactValues)
   const [disabled, setDisabled] = useState(false)

   const onChangeContact = event => {
      const { name, value } = event.target

      changeInputContact(name, value)
   }

   //Validation Errors for Contact Page:
   const changeInputContact = (name, value) => {
      yup
         .reach(formSchemaContact, name)
         .validate(value)
         .then(() => {
            setContactErrors({ ...contactErrors, [name]: '' })
         })
         .catch(err => {
            setContactErrors({ ...contactErrors, [name]: err.errors })
         })

      setContactFormValues({ ...contactFormValues, [name]: value })
   }

   useEffect(() => {
      formSchemaContact.isValid(contactFormValues).then(validate => {
         setDisabled(!validate)
      })
   }, [contactFormValues])

   return (
      <>
         <Header />

         <StyledForm onSubmit={null}>
            <StyledH2>
               Contact the Team
            </StyledH2>
            <p className='contact-p'>
               If you would like to get in touch with the team, feel free to fill out the form below.
            </p>
            <StyledFormDiv>
               <StyledInputDiv>
                  <StyledContactLabels>
                     First Name
                  </StyledContactLabels>
                  <StyledInputs
                     type='text'
                     name='first_name'
                     value={contactFormValues.first_name}
                     onChange={onChangeContact}
                  />
                  <div className='errors'>
                     {contactErrors.first_name}
                  </div>
               </StyledInputDiv>
               <StyledInputDiv>
                  <StyledContactLabels>
                     Last Name
                  </StyledContactLabels>
                  <StyledInputs
                     type='text'
                     name='last_name'
                     value={contactFormValues.last_name}
                     onChange={onChangeContact}
                  />
                  <div className='errors'>
                     {contactErrors.last_name}
                  </div>
               </StyledInputDiv>
               <StyledInputDiv>
                  <StyledContactLabels>
                     Username
                  </StyledContactLabels>
                  <StyledInputs
                     type='text'
                     name='username'
                     value={contactFormValues.username}
                     onChange={onChangeContact}
                  />
               </StyledInputDiv>
               <StyledInputDiv>
                  <StyledContactLabels>
                     Subject
                  </StyledContactLabels>
                  <StyledInputs
                     type='text'
                     name='subject'
                     value={contactFormValues.subject}
                     onChange={onChangeContact}
                  />
                  <div className='errors'>
                     {contactErrors.subject}
                  </div>
               </StyledInputDiv>
               <div className='contact-message'>
                  <StyledContactLabels>
                     Message
                  </StyledContactLabels>
                  <textarea
                     type='text area'
                     className='message-input'
                     name='message'
                     value={contactFormValues.message}
                     onChange={onChangeContact}
                  />
                  <div className='errors'>
                     {contactErrors.message}
                  </div>
               </div>
               <div className="contact-button">
                  <StyledButtons>Submit</StyledButtons>
               </div>
            </StyledFormDiv>
         </StyledForm>

         <Footer />
      </>
   )
}