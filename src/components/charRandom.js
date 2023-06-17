//Library, form validation, + css imports
import '../App.css';
import React, { useState, useEffect, useContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import * as yup from 'yup'

import { Header, Footer } from './header-footer'

// styles:
import StyledButtons from '../styles/buttonStyles'
import { SaveCharH3 } from '../styles/homeStyles'

//initial values for state:
import { initialRandomizerValues } from '../variables/stateVariables';

//form validation:
import { formSchemaRandomizer } from '../validation/formSchemas';

//State Management - Context API
import { UserContext } from '../contextAPI';


export default function CharRandomizer() {
   //Not getting rid of this yet, just in case I need it in the future to post the character created to the user's account
   const userContext = useContext(UserContext)

   const [randomizerFormValues, setRandomizerFormValues] = useState(initialRandomizerValues)
   const [randomizerErrors, setRandomizerErrors] = useState(initialRandomizerValues)
   const [disabled, setDisabled] = useState(false)

   //Validation Errors for Randomizer Page:
   const changeInputRandomizer = (name, value) => {
      yup
         .reach(formSchemaRandomizer, name)
         .validate(value)
         .then(() => {
            setRandomizerErrors({ ...randomizerErrors, [name]: '' })
         })
         .catch(err => {
            setRandomizerErrors({ ...randomizerErrors, [name]: err.errors })
         })

      setRandomizerFormValues({ ...randomizerFormValues, [name]: value })
   }

   useEffect(() => {
      formSchemaRandomizer.isValid(randomizerFormValues).then(validate => {
         setDisabled(!validate)
      })
   }, [randomizerFormValues])

   const onChangeForm = event => {
      const { name, value } = event.target

      changeInputRandomizer(name, value)
   }

   return (
      <>
         <Header />

         <h2>Character Creation Randomizer</h2>
         <SaveCharH3>
            ** Disclaimer ** 
            <br></br>
            This is still being worked on and is not currently working
         </SaveCharH3>

         <form id='charactor-randomizer-form' onSubmit={null}>
            <p className='randomizer-prompt'>
               Use the prompts below and click Create to get your randomized character! You can also fill out the prompts or mix and match to get a random character. 
               <br></br>
               This is a choose your own adventure character creation!
            </p>
            <div className='charFirstName'>
               <label>
                  First Name
                  <input
                     type='text'
                     id='char-first-name'
                     name='first_name'
                     value={randomizerFormValues.first_name}
                     onChange={onChangeForm}
                  />
                  <input
                     type='button'
                     id='first-name random-btn'
                     name='first_name'
                     value='Randomize'
                     onChange={onChangeForm}
                  />
               </label>
            </div>
            <div className='charLastName'>
               <label>
                  Last Name
                  <input
                     type='text'
                     id='char-last-name'
                     name='last_name'
                     value={randomizerFormValues.last_name}
                     onChange={onChangeForm}
                  />
                  <input
                     type='button'
                     id='last-name random-btn'
                     name='last_name'
                     value='Randomize'
                     onChange={onChangeForm} 
                  />
               </label>
            </div>
            <div className='charLevel'>
               <label>
                  Level
                  <input
                     type='number'
                     id='char-level'
                     name='level'
                     value={randomizerFormValues.level}
                     onChange={onChangeForm}
                  />
                  <input
                     type='button'
                     id='level random-btn'
                     name='level'
                     value='Randomize'
                     onChange={onChangeForm}
                  />
               </label>
            </div>
            <div className='charRace'>
               <label>
                  Race
                  <input
                     type='text'
                     id='char-race'
                     name='race'
                     value={randomizerFormValues.race}
                     onChange={onChangeForm}
                  />
                  <input
                     type='button'
                     id='race random-btn'
                     name='race'
                     value='Randomize'
                     onChange={onChangeForm}
                  />
               </label>
            </div>
            <div className='charClass'>
               <label>
                  Class
                  <select
                     name='class'
                     id='char-class'
                     value={randomizerFormValues.class}
                     onChange={onChangeForm}
                  >
                     {/* trying to map out the options with the API */}
                     {/* {
                        axios
                           .get(`process.env.BASE_URL`)
                           .then(res => {
                              console.log(res)
                           })
                           .catch(err => {
                              console.log(err)
                           })
                     } */}
                     <option value='You may select a class'>Select Class</option>
                     <option value='artificer'>Artificer</option>
                     <option value='barbarian'>Barbarian</option>
                     <option value='bard'>Bard</option>
                     <option value='blood hunter'>Blood Hunter</option>
                     <option value='cleric'>Cleric</option>
                     <option value='druid'>Druid</option>
                     <option value='fighter'>Fighter</option>
                     <option value='monk'>Monk</option>
                     <option value='paladin'>Paladin</option>
                     <option value='ranger'>Ranger</option>
                     <option value='rogue'>Rogue</option>
                     <option value='sorcerer'>Sorcerer</option>
                     <option value='warlock'>Warlock</option>
                     <option value='wizard'>Wizard</option>
                  </select>
                  <input
                     type='button'
                     id='level random-btn'
                     name='level'
                     value='Randomize'
                     onChange={onChangeForm}
                  />
               </label>
            </div>
            <div className='charClassFocus'>
               <label>
                  Class Focus
                  {/* Want to change this to a select that changes what focus choices are based on the class selected (above) */}
                  <input
                     type='text'
                     id='char-class-focus'
                     name='class_focus'
                     value={randomizerFormValues.class_focus}
                     onChange={onChangeForm}
                  />
                  <input
                     type='button'
                     id='class-focus random-btn'
                     name='race'
                     value='Randomize'
                     onChange={onChangeForm}
                  />
               </label>
            </div>
            <div className='charAlignment'>
               <label>
                  Alignment
                  <select
                     name='alignment'
                     id='char-alignment'
                     value={randomizerFormValues.alignment}
                     onChange={onChangeForm}
                  >
                     <option value='You may select an alignment'>Select Alignment</option>
                     {/* Want to map through the alignment array to get the different options */}
                  </select>
                  <input
                     type='button'
                     id='alignment random-btn'
                     name='alignment'
                     value='Randomize'
                     onChange={onChangeForm}
                  />
               </label>
            </div>
            <div className='charStats'>
               <div className='strength-div'>
                  <label>
                     Strength
                     <input
                        type='number'
                        id='strength random-btn'
                        name='strength'
                        value={randomizerFormValues.strength}
                        onChange={onChangeForm}
                     />
                     <input
                        type='button'
                        id='strength random-btn'
                        name='strength'
                        value='Randomize'
                        onChange={onChangeForm}
                     />
                  </label>
               </div>
               <div className='dexterity-div'>
                  <label>
                     Dexterity
                     <input
                        type='number'
                        id='dexterity random-btn'
                        name='dexterity'
                        value={randomizerFormValues.dexterity}
                        onChange={onChangeForm}
                     />
                     <input
                        type='button'
                        id='dexterity random-btn'
                        name='dexterity'
                        value='Randomize'
                        onChange={onChangeForm}
                     />
                  </label>
               </div>
               <div className='constitution-div'>
                  <label>
                     Constitution
                     <input
                        type='number'
                        id='constitution random-btn'
                        name='strength'
                        value={randomizerFormValues.consitution}
                        onChange={onChangeForm}
                     />
                     <input
                        type='button'
                        id='constitution random-btn'
                        name='constitution'
                        value='Randomize'
                        onChange={onChangeForm}
                     />
                  </label>
               </div>
               <div className='intelligence-div'>
                  <label>
                     Intelligence
                     <input
                        type='number'
                        id='intelligence random-btn'
                        name='intelligence'
                        value={randomizerFormValues.intelligence}
                        onChange={onChangeForm}
                     />
                     <input
                        type='button'
                        id='intelligence random-btn'
                        name='intelligence'
                        value='Randomize'
                        onChange={onChangeForm}
                     />
                  </label>
               </div>
               <div className='wisdom-div'>
                  <label>
                     Wisdom
                     <input
                        type='number'
                        id='wisdom random-btn'
                        name='wisdom'
                        value={randomizerFormValues.wisdom}
                        onChange={onChangeForm}
                     />
                     <input
                        type='button'
                        id='wisdom random-btn'
                        name='wisdom'
                        value='Randomize'
                     onChange={onChangeForm}
                     />
                  </label>
               </div>
               <div className='charisma-div'>
                  <label>
                     Charisma
                     <input
                        type='number'
                        id='charisma random-btn'
                        name='charisma'
                        value={randomizerFormValues.charisma}
                        onChange={onChangeForm}
                     />
                     <input
                        type='button'
                        id='charisma random-btn'
                        name='charisma'
                        value='Randomize'
                        onChange={onChangeForm}
                     />
                  </label>
               </div>
               <div className='charGender'>
                  <label>
                     Gender
                     <select
                        name='gender'
                        id='char-gender'
                        value={randomizerFormValues.gender}
                        onChange={onChangeForm}
                     >
                        <option value='You may select a gender'>Select Gender</option>
                        <option value='female'>Female</option>
                        <option value='male'>Male</option>
                        <option value='nonbinary'>Nonbinary</option>

                     </select>
                     <input
                        type='button'
                        id='alignment random-btn'
                        name='alignment'
                        value='Randomize'
                        onChange={onChangeForm}
                     />
                  </label>
               </div>
               <div className='charHeight'>
                  <label>
                     Height
                     <input
                        // Or should type be number? (ex: 5'6'' or 5.6)
                        type='text'
                        id='char-height'
                        name='height'
                        value={randomizerFormValues.height}
                        onChange={onChangeForm}
                     />
                     <input
                        type='button'
                        id='height random-btn'
                        name='height'
                        value='Randomize'
                        onChange={onChangeForm}
                     />
                  </label>
               </div>
               <div className='charAge'>
                  <label>
                     Age
                     <input
                        type='number'
                        id='char-age'
                        name='age'
                        value={randomizerFormValues.age}
                        onChange={onChangeForm}
                     />
                     <input
                        type='button'
                        id='age random-btn'
                        name='age'
                        value='Randomize'
                        onChange={onChangeForm}
                     />
                  </label>
               </div>
               <div className='charWeight'>
                  <label>
                     Weight
                     <input
                        type='number'
                        id='char-weight'
                        name='weight'
                        value={randomizerFormValues.weight}
                        onChange={onChangeForm}
                     />
                     <input
                        type='button'
                        id='weight random-btn'
                        name='weight'
                        value='Randomize'
                        onChange={onChangeForm}
                     />
                  </label>
               </div>
               <div className='charPhysicalDescription'>
                  <label>
                     Physical Description
                     {/* Want to make the input a text box that can expand */}
                     <input
                        type='text'
                        id='char-phys-description'
                        name='physical_description'
                        value={randomizerFormValues.description}
                        onChange={onChangeForm}
                     />
                     <input
                        type='button'
                        id='physical-description random-btn'
                        name='physical_description'
                        value='Randomize'
                        onChange={onChangeForm}
                     />
                  </label>
               </div>
               <div className='charBackground'>
                  <label>
                     Background
                     {/* This should be a select with it's own databse - but for right now I am making it a text field for simplicity */}
                     <input
                        type='text'
                        id='char-background'
                        name='background'
                        value={randomizerFormValues.background}
                        onChange={onChangeForm}
                     />
                     <input
                        type='button'
                        id='background random-btn'
                        name='background'
                        value='Randomize'
                        onChange={onChangeForm}
                     />
                  </label>
               </div>
               {/* Stopped here - need to continue form options */}
            </div>

            <div className="button">
               <StyledButtons>Submit</StyledButtons>
            </div>
         </form>

         <Footer />
      </>
   )
}