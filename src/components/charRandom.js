import React from 'react';

import { Header, Footer } from './header-footer'
import StyledButtons from '../styles/buttonStyles'
import { StyledLabels, StyledH2, StyledForm } from '../styles/loginPageStyles';
import { StyledInputDivs } from '../styles/randomizerStyles'


export default function CharRandomizer(props) {
   // const { changeRand, valuesRand } = props

   return (
      <>
         <Header />

         <StyledH2>
            Character Creation Randomizer
         </StyledH2>

         <StyledForm className='randomizer-form' onSubmit={null}>
            <p className='randomizer-prompt'>Use the prompts below and click Create to get your randomized (or not) character!</p>
            <StyledInputDivs className='charFirstName'>
               <StyledLabels>
                  First Name
               </StyledLabels>
               <input
                  type='text'
                  id='char-first-name'
                  name='first_name'
               // value={}
               // onChange={}
               />
               <input
                  type='button'
                  id='first-name random-btn'
                  name='first_name'
                  value='Randomize'
               //onChange={}
               />
            </StyledInputDivs>
            <StyledInputDivs className='charLastName'>
               <StyledLabels>
                  Last Name
               </StyledLabels>
               <input
                  type='text'
                  id='char-last-name'
                  name='last_name'
               // value={}
               // onChange={}
               />
               <input
                  type='button'
                  id='last-name random-btn'
                  name='last_name'
                  value='Randomize'
               //onChange={}
               />
            </StyledInputDivs>
            <StyledInputDivs className='charLevel'>
               <StyledLabels>
                  Level
               </StyledLabels>
               <input
                  type='number'
                  id='char-level'
                  name='level'
               // value={}
               // onChange={}
               />
               <input
                  type='button'
                  id='level random-btn'
                  name='level'
                  value='Randomize'
               //onChange={}
               />
            </StyledInputDivs>
            <StyledInputDivs className='charRace'>
               <StyledLabels>
                  Race
               </StyledLabels>
               <input
                  type='text'
                  id='char-race'
                  name='race'
               // value={}
               // onChange={}
               />
               <input
                  type='button'
                  id='race random-btn'
                  name='race'
                  value='Randomize'
               //onChange={}
               />
            </StyledInputDivs>
            <StyledInputDivs className='charClass'>
               <StyledLabels>
                  Class
               </StyledLabels>
               <select
                  name='class'
                  id='char-class'
               // value={}
               // onChange={}
               >
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
               //onChange={}
               />
            </StyledInputDivs>
            <StyledInputDivs className='charClassFocus'>
               <StyledLabels>
                  Class Focus
               </StyledLabels>
               {/* Want to change this to a select that changes what focus choices are based on the class selected (above) */}
               <input
                  type='text'
                  id='char-class-focus'
                  name='class_focus'
               // value={}
               // onChange={}
               />
               <input
                  type='button'
                  id='class-focus random-btn'
                  name='race'
                  value='Randomize'
               //onChange={}
               />
            </StyledInputDivs>
            <StyledInputDivs className='charAlignment'>
               <StyledLabels>
                  Alignment
               </StyledLabels>
               <select
                  name='alignment'
                  id='char-alignment'
               // value={}
               // onChange={}
               >
                  <option value='You may select an alignment'>Select Alignment</option>
                  {/* Want to map through the alignment array to get the different options */}
               </select>
               <input
                  type='button'
                  id='alignment random-btn'
                  name='alignment'
                  value='Randomize'
               //onChange={}
               />
            </StyledInputDivs>
            <div className='charStats'>
               <StyledInputDivs>
                  <StyledLabels>
                     Strength
                  </StyledLabels>
                  <input
                     type='number'
                     id='strength random-btn'
                     name='strength'
                  // value={}
                  //onChange={}
                  />
                  <input
                     type='button'
                     id='strength random-btn'
                     name='strength'
                     value='Randomize'
                  // onChange={ }
                  />
               </StyledInputDivs>
               <StyledInputDivs>
                  <StyledLabels>
                     Dexterity
                  </StyledLabels>
                  <input
                     type='number'
                     id='dexterity random-btn'
                     name='dexterity'
                  // value={}
                  //onChange={}
                  />
                  <input
                     type='button'
                     id='dexterity random-btn'
                     name='dexterity'
                     value='Randomize'
                  // onChange={ }
                  />
               </StyledInputDivs>
               <StyledInputDivs>
                  <StyledLabels>
                     Constitution
                     <input
                        type='number'
                        id='constitution random-btn'
                        name='strength'
                     // value={}
                     //onChange={}
                     />
                     <input
                        type='button'
                        id='constitution random-btn'
                        name='constitution'
                        value='Randomize'
                     // onChange={ }
                     />
                  </StyledLabels>
               </StyledInputDivs>
               <StyledInputDivs>
                  <StyledLabels>
                     Intelligence
                     <input
                        type='number'
                        id='intelligence random-btn'
                        name='intelligence'
                     // value={}
                     //onChange={}
                     />
                     <input
                        type='button'
                        id='intelligence random-btn'
                        name='intelligence'
                        value='Randomize'
                     // onChange={ }
                     />
                  </StyledLabels>
               </StyledInputDivs>
               <StyledInputDivs>
                  <StyledLabels>
                     Wisdom
                     <input
                        type='number'
                        id='wisdom random-btn'
                        name='wisdom'
                     // value={}
                     //onChange={}
                     />
                     <input
                        type='button'
                        id='wisdom random-btn'
                        name='wisdom'
                        value='Randomize'
                     // onChange={ }
                     />
                  </StyledLabels>
               </StyledInputDivs>
               <StyledInputDivs>
                  <StyledLabels>
                     Charisma
                     <input
                        type='number'
                        id='charisma random-btn'
                        name='charisma'
                     // value={}
                     //onChange={}
                     />
                     <input
                        type='button'
                        id='charisma random-btn'
                        name='charisma'
                        value='Randomize'
                     // onChange={ }
                     />
                  </StyledLabels>
               </StyledInputDivs>
               <StyledInputDivs>
                  <StyledLabels>
                     Gender
                     <select
                        name='gender'
                        id='char-gender'
                     // value={}
                     // onChange={}
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
                     //onChange={}
                     />
                  </StyledLabels>
               </StyledInputDivs>
               <StyledInputDivs>
                  <StyledLabels>
                     Height
                     <input
                        // Or should type be number? (ex: 5'6'' or 5.6)
                        type='text'
                        id='char-height'
                        name='height'
                     // value={}
                     // onChange={}
                     />
                     <input
                        type='button'
                        id='height random-btn'
                        name='height'
                        value='Randomize'
                     //onChange={}
                     />
                  </StyledLabels>
               </StyledInputDivs>
               <StyledInputDivs>
                  <StyledLabels>
                     Age
                     <input
                        type='number'
                        id='char-age'
                        name='age'
                     // value={}
                     // onChange={}
                     />
                     <input
                        type='button'
                        id='age random-btn'
                        name='age'
                        value='Randomize'
                     //onChange={}
                     />
                  </StyledLabels>
               </StyledInputDivs>
               <StyledInputDivs>
                  <StyledLabels>
                     Weight
                     <input
                        type='number'
                        id='char-weight'
                        name='weight'
                     // value={}
                     // onChange={}
                     />
                     <input
                        type='button'
                        id='weight random-btn'
                        name='weight'
                        value='Randomize'
                     //onChange={}
                     />
                  </StyledLabels>
               </StyledInputDivs>
               <StyledInputDivs>
                  <StyledLabels>
                     Physical Description
                     {/* Want to make the input a text box that can expand */}
                     <input
                        type='text'
                        id='char-phys-description'
                        name='physical_description'
                     // value={}
                     // onChange={}
                     />
                     <input
                        type='button'
                        id='physical-description random-btn'
                        name='physical_description'
                        value='Randomize'
                     //onChange={}
                     />
                  </StyledLabels>
               </StyledInputDivs>
               <StyledInputDivs>
                  <StyledLabels>
                     Background
                     {/* This should be a select with it's own databse - but for right now I am making it a text field for simplicity */}
                     <input
                        type='text'
                        id='char-background'
                        name='background'
                     // value={}
                     // onChange={}
                     />
                     <input
                        type='button'
                        id='background random-btn'
                        name='background'
                        value='Randomize'
                     //onChange={}
                     />
                  </StyledLabels>
               </StyledInputDivs>
            </div>

            <div className="button">
               <StyledButtons>Submit</StyledButtons>
            </div>
         </StyledForm>

         <Footer />
      </>
   )
}