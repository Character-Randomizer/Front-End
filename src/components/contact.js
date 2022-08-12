import React from 'react';

import { Header, Footer } from './header-footer'

export default function Contact(props) {
   const { changeContact, valuesContact, contactErrors } = props

   const onChangeContact = event => {
      const { name, value } = event.target

      changeContact(name, value)
   }

   return (
      <>
         <Header />

         <form id='contact-form' onSubmit={null}>
            <div className='contact-div'>
               <h2>
                  Contact the Team
               </h2>
               <p>
                  If you would like to get in touch with the team, feel free to fill out the form below.
               </p>
               <div className='contact-first-name'>
                  <div className='errors'>
                     {contactErrors.first_name}
                  </div>
                  <label>
                     First Name
                     <input
                        type='text'
                        id='input-first-name'
                        name='first_name'
                        value={valuesContact.first_name}
                        onChange={onChangeContact}
                     />
                  </label>
               </div>
               <div className='contact-last-name'>
                  <div className='errors'>
                     {contactErrors.last_name}
                  </div>
                  <label>
                     Last Name
                     <input
                        type='text'
                        id='input-last-name'
                        name='last_name'
                        value={valuesContact.last_name}
                        onChange={onChangeContact}
                     />
                  </label>
               </div>
               <div className='contact-un'>
                  <label>
                     Username
                     <input
                        type='text'
                        id='input-un'
                        name='username'
                        value={valuesContact.username}
                        onChange={onChangeContact}
                     />
                  </label>
               </div>
               <div className='contact-subject'>
                  <div className='errors'>
                     {contactErrors.subject}
                  </div>
                  <label>
                     Subject
                     <input
                        type='text'
                        id='input-subject'
                        name='subject'
                        value={valuesContact.subject}
                        onChange={onChangeContact}
                     />
                  </label>
               </div>
               <div className='contact-message'>
                  <div className='errors'>
                     {contactErrors.message}
                  </div>
                  <label>
                     Message
                     <input
                        type='text'
                        id='input-message'
                        name='message'
                        value={valuesContact.message}
                        onChange={onChangeContact}
                     />
                  </label>
               </div>
               <button>Submit</button>
            </div>
         </form>

         <Footer />
      </>
   )
}