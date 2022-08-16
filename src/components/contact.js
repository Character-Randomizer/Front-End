import React from 'react';

import { Header, Footer } from './header-footer'
import StyledButtons from '../styles/buttonStyles'
import { StyledFormDiv, StyledInputDiv, StyledContactLabels, StyledInputs, StyledH2 } from '../styles/contactFormStyles';
import { StyledForm } from '../styles/loginPageStyles'

export default function Contact(props) {
   const { changeContact, valuesContact, contactErrors } = props

   const onChangeContact = event => {
      const { name, value } = event.target

      changeContact(name, value)
   }

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
                     value={valuesContact.first_name}
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
                     value={valuesContact.last_name}
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
                     value={valuesContact.username}
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
                     value={valuesContact.subject}
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
                     value={valuesContact.message}
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