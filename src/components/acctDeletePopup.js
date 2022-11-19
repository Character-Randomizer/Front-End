import React, { useState } from "react"
import Popup from "reactjs-popup"

import StyledButtons from "../styles/buttonStyles"

export const DeletePopup = (props) => {
   const { deleteAccount,
      user } = props

   const [popup, setPopup] = useState(false)
   const [disable, setDisable] = useState(true)
   const [deleteValue, setDeleteValue] = useState({ delete: '' })

   const body = document.querySelector('body')

   //Opening + Closing the popup with scroll being disabled/abled:
   const handleOpen = () => {
      body.style.overflow = 'hidden'
      setPopup(true)
   }

   const handleClose = () => {
      setPopup(false)
      body.style.overflow = 'auto'
      setDeleteValue({ delete: '' })

   }

   // Changing input for the popup + disbaling the delete button if 'DELETE' is not typed in + vice versa::
   const onChange = (event) => {
      const { name, value } = event.target

      setDeleteValue({ [name]: value })

      if (value === 'DELETE') {
         setDisable(false)
      }
      else {
         setDisable(true)
      }
   }


   return (
      <div>
         <StyledButtons id='delete-btn-1' onClick={(event) => {
            event.preventDefault()
            handleOpen()
         }}>
            Delete
         </StyledButtons>

         {/* Popup for hitting the delete button */}
         <Popup
            className="popup"
            open={popup}
            closeOnDocumentClick
            closeOnEscape
            onClose={handleClose}>
            <div className='popup'>
               <h1>Delete this account?</h1>
               <p>If you are sure you want to delete this account, type in DELETE into the field below and click the Delete button.</p>
               <input
                  type='text'
                  id='delete-input'
                  name='delete'
                  value={deleteValue.delete}
                  onChange={onChange}
               />
               <button className='cancel-btn' onClick={() => {
                  handleClose()
                  body.style.overflow = 'auto'
               }}>Cancel</button>
               <button className='delete-btn-2'
                  disabled={disable}
                  onClick={() => {
                     setDeleteValue({ delete: '' })
                     body.style.overflow = 'auto'
                     deleteAccount(user)
                  }}
               >Delete</button>
            </div>
         </Popup>
      </div>
   )
}

export default DeletePopup