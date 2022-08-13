import React from 'react';

import { Header, Footer } from './header-footer'

export default function Contact(props) {
   const { changeContact, valuesContact } = props

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
                  <label>
                     First Name
                     <input
                        type='text'
                        id='input-first-name'
                        name='first_name'
                     // value={}
                     // onChange={}
                     />
                  </label>
               </div>
               <div className='contact-last-name'>
                  <label>
                     Last Name
                     <input
                        type='text'
                        id='input-last-name'
                        name='last_name'
                     // value={}
                     // onChange={}
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
                     // value={}
                     // onChange={}
                     />
                  </label>
               </div>
               <div className='contact-email'>
                  <label>
                     Email
                     <input
                        type='text'
                        id='input-email'
                        name='email'
                     // value={}
                     // onChange={}
                     />
                  </label>
               </div>
               <div className='contact-subject'>
                  <label>
                     Email
                     <input
                        type='text'
                        id='input-subject'
                        name='subject'
                     // value={}
                     // onChange={}
                     />
                  </label>
               </div>
               <div className='contact-message'>
                  <label>
                     Message
                     <input
                        type='text'
                        id='input-message'
                        name='message'
                     // value={}
                     // onChange={}
                     />
                  </label>
               </div>
            </div>
         </form>

         <Footer />
      </>
   )
}