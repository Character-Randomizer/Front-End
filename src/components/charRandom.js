//Library, form validation, + css imports
import '../App.css';
import React, { useState, useEffect, useContext } from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom'; 
import * as yup from 'yup'
import axios from 'axios';
// Name generator is limited, see link below for more details:
   // https://npm.io/package/fantasy-name-generator
   // Example: nameByRace("elf", { gender: "female" })
import { nameByRace } from 'fantasy-name-generator';

// Fantasy Names npm package generator is not currently working.
// Keeping here to remind myself to look into this at another date.
//Below name generator example:
   // generateFantasyName('dungeons_and_dragons')
// import generateFantasyName from 'fantasy-names';

import { Header, Footer } from './header-footer'

// styles:
import StyledButtons from '../styles/buttonStyles'
import { SaveCharH3, SaveCharP } from '../styles/homeStyles'

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

   //Setting API items:
   const [alignArr, setAlignArr] = useState([])
   const [backgroundArr, setBackgroundArr] = useState([])
   const [classArr, setClassArr] = useState([])
   const [focusArr, setFocusArr] = useState([])
   const [fnameArr, setFnameArr] = useState([])
   const [lnameArr, setLnameArr] = useState([])
   const [genderArr, setGenderArr] = useState([])
   const [physArr, setPhysArr] = useState([])
   const [raceArr, setRaceArr] = useState([])

   //Getting classes from backend API upon render:
      //Most arrays will be ordered alphabetically for the dropdown options:
   useEffect(() => {
      async function fetchAlignment() {
         const { data } = await axios.get(`${process.env.REACT_APP_BE_URL}/alignment`)
            const alignResult = []

            data.forEach(value => {
               alignResult.push({
                  alignment: value.alignment,
                  align_id: value.alignment_id,
                  acronym: value.alignment_acronym,
                  description: value.alignment_description
               })
            })

            return setAlignArr([
               ...alignResult.sort((a, b) => {
                  let aa = a.alignment.toLowerCase()
                  let ab = b.alignment.toLowerCase()
   
                  if(aa < ab){
                     return -1
                  }
                  else if(aa > ab){
                     return 1
                  }
                  else{
                     return 0
                  }
               })
            ])
      }

      async function fetchBackground() {
         const { data } = await axios.get(`${process.env.REACT_APP_BE_URL}/background`)
         const backgroundResult = []

         data.forEach(value => {
            backgroundResult.push({
               background_id: value.background_id,
               background: value.background_name,
               description: value.background_description
            })
         })

         return setBackgroundArr([
            ...backgroundResult.sort((a, b) => {
               let ba = a.background.toLowerCase()
               let bb = b.background.toLowerCase()

               if(ba < bb){
                  return -1
               }
               else if(ba > bb){
                  return 1
               }
               else{
                  return 0
               }
            })
         ])
      }

      async function fetchClass() {
         const { data } = await axios.get(`${process.env.REACT_APP_BE_URL}/class`)
         const classResult = []

         data.forEach(value => {
            classResult.push({
               class_id: value.class_id,
               class: value.class,
               description: value.class_description
            })
         })

         setClassArr([
            ...classResult.sort((a, b) => {
               let ca = a.class.toLowerCase()
               let cb = b.class.toLowerCase()

               if(ca < cb){
                  return -1
               }
               else if(ca > cb){
                  return 1
               }
               else{
                  return 0
               }
            })
         ])
      }

      async function fetchClassFocus() {
         const { data } = await axios.get(`${process.env.REACT_APP_BE_URL}/class-focus`)
         const focusResult = []

         data.forEach(value => {
            focusResult.push({
               focus_id: value.focus_id,
               class_focus: value.class_focus,
               class_id: value.class_id,
               focus_description: value.focus_description
            })
         })

         return setFocusArr([
            ...focusResult.sort((a, b) => {
               let fa = a.class_focus.toLowerCase()
               let fb = b.class_focus.toLowerCase()

               if(fa < fb){
                  return -1
               }
               else if(fa > fb){
                  return 1
               }
               else{
                  return 0
               }
            })
         ])
      }

      //Not ordering array b/c not going to be a dropdown:
      async function fetchFirstName() {
         const { data } = await axios.get(`${process.env.REACT_APP_BE_URL}/firstname`)
         const fnameResult = []

         data.forEach(value => {
            fnameResult.push({
               fname_id: value.fname_id,
               fname: value.fname,
               gender: value.gender,
               race: value.race
            })
         })

         setFnameArr([
            ...fnameResult
         ])
      }

      async function fetchGender() {
         const { data } = await axios.get(`${process.env.REACT_APP_BE_URL}/gender`)
         const genderResult = []

         data.forEach(value => {
            genderResult.push({
               gender_id: value.gender_id,
               gender: value.gender
            })
         })

         return setGenderArr([
            ...genderResult.sort((a, b) => {
               let ga = a.gender.toLowerCase()
               let gb = b.gender.toLowerCase()

               if(ga < gb){
                  return -1
               }
               else if(ga > gb){
                  return 1
               }
               else{
                  return 0
               }
            })
         ])
      }

      //Not ordering array b/c not going to be a dropdown:
      async function fetchLastName() {
         const { data } = await axios.get(`${process.env.REACT_APP_BE_URL}/lastname`)
         const lnameResult = []

         data.forEach(value => {
            lnameResult.push({
               lname_id: value.fname_id,
               lname: value.fname,
               gender: value.gender,
               race: value.race
            })
         })

         setLnameArr([
            ...lnameResult
         ])
      }

      //Not ordering array b/c not going to be a dropdown:
      async function fetchPhys() {
         const { data } = await axios.get(`${process.env.REACT_APP_BE_URL}/phys-description`)
         const physResult = []

         data.forEach(value => {
            physResult.push({
               phys_id: value.phys_id,
               sentence_num: value.sentence_num,
               gender: value.gender,
               race: value.race,
               description: value.description
            })
         })

         setPhysArr([
            ...physResult
         ])
      }

      async function fetchRace() {
         const { data } = await axios.get(`${process.env.REACT_APP_BE_URL}/race`)
         const raceResult = []

         data.forEach(value => {
            raceResult.push({
               race_id: value.race_id,
               race: value.race_name
            })
         })

         return setRaceArr([
            ...raceResult.sort((a, b) => {
               let ra = a.race.toLowerCase()
               let rb = b.race.toLowerCase()

               if(ra < rb){
                  return -1
               }
               else if(ra > rb){
                  return 1
               }
               else{
                  return 0
               }
            })
         ])
      }

      fetchAlignment()
      fetchBackground()
      fetchClass()
      fetchClassFocus()
      fetchGender()
      fetchRace()
   }, [])

   //Changes form based on inputs + validates errors:
   const changeInput = (event) => {
      let { name, value } = event.target
      //If a value is only a number string(ex: "4", "4.5") it changes it to a number (ex: 4, 4.5) + rounds it (ex: 4.3 -> 4, 4.6 -> 5):
      if(/^(\d+.)*(\d+)$/.test(value) === true && event.target.name !== 'height'){
         value = Math.round(parseFloat(value))
      }

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

   //Randomized level (1-20): 
   const randomLevel = (event) => {
      event.target.value = Math.ceil(Math.random() * 20)
      
      changeInput(event)
   }

     //Randomized ability score (3-18):
      //When rolling for these, you would roll 4d6s and take the higher 3 numbers
         //This means that the minimum would be 3 and the max would be 18
     const randomAbilityScore = (event) => {
      event.target.value = Math.ceil(Math.random() * 18)

      if(event.target.value < 3){
         event.target.value = 3
      }
      
      changeInput(event)
   }

   //Randomizes Age based on race:
   const randomAge = event => {

   }
   //Randomizes Alignment:
   const randomAlignment = event => {
      let randomNumId = Math.ceil(Math.random() * alignArr.length)

      let randAlign = alignArr.find(item => item.align_id === randomNumId)
      event.target.value = randAlign.alignment
            
      return changeInput(event)
   } 

   //Randomizes Background:
   const randomBackground = event => {
      let randomNumId = Math.ceil(Math.random() * backgroundArr.length)

      let randBackground = backgroundArr.find(item => item.background_id === randomNumId)
      event.target.value = randBackground.background
            
      return changeInput(event)
   } 

   //Randomizes Class:
   const randomClass = (event) => {
      let randomNumId = Math.ceil(Math.random() * classArr.length)
      let randClass = classArr.find(item => item.class_id === randomNumId)
      event.target.value = randClass.class
      
      return changeInput(event)
   }

   //Randomizes Class Focus:
   const randomFocus = async (event) => {
      let randomNumId = Math.ceil(Math.random() * focusArr.length)
      let randFocus = focusArr.find(item => item.focus_id === randomNumId)
         
      let randFocuses = focusArr.filter(item => (item.class_id === classArr.filter(clss => clss.class === randomizerFormValues.class)[0].class_id))

      //There is more than one class focus:
      if(randFocuses.length > 1){
         randomNumId = Math.ceil(Math.random() * randFocuses.length)
         randFocus = randFocuses.find(item => item.focus_id === randomNumId)

         event.target.value = randFocus[0].class_focus
      }
      //Only one class focus:
      else{
         event.target.value = randFocuses[0].class_focus
      }

      return changeInput(event)
   }

   //Randomizes Gender:
   const randomGender = (event) => {
      let randomNumId = Math.ceil(Math.random() * genderArr.length)

      let randGender = genderArr.find(item => item.gender_id === randomNumId)
      event.target.value = randGender.gender
            
      return changeInput(event)
   }

   //Randomizes first name based on race (if no race selected, it picks a random name):
   const randomFname = (event) => {

   }

   //Randomizes Race:
   const randomRace = (event) => {
      let randomNumId = Math.ceil(Math.random() * raceArr.length)

      let randRace = raceArr.find(item => item.race_id === randomNumId)
      event.target.value = randRace.race
            
      return changeInput(event)
   }

   const focusOptions = () => {
      let classFocuses
      let selectOption = <option key='' value=''>You May Select a Class Focus</option>


      // If no class selected:
      if(!randomizerFormValues.class){
         return <option value=''>First, select a class</option>
      } 
      // If there is a class selected:
      else if (randomizerFormValues.class){
         classFocuses = focusArr.filter(item => {
            return item.class_id === classArr.filter(clss => clss.class === randomizerFormValues.class)[0].class_id
         })
         .map(focus => 
            <option key={focus.class_focus} value={focus.class_focus}>{focus.class_focus}</option>
         )
      }

      return [selectOption, classFocuses]
   }

   const classSelected = () => {
      return randomizerFormValues.class !== '';
   }

   console.log(`BOTTOM OF PAGE (before return), current form values:`, randomizerFormValues)

   return (
      <>
         <Header />

         <h2>Character Creation Randomizer</h2>
         <SaveCharH3>
            ** Disclaimer ** 
            <br></br>
            This is still being worked on and is not fully functioning.
            <br></br>
            <SaveCharP>You can input values and most of the randomize buttons are working, but you cannot save your character yet.</SaveCharP>
         </SaveCharH3>
         <br></br>

         <form id='charactor-randomizer-form' onSubmit={null}>
            <p className='randomizer-prompt'>
               Use the prompts below and click Create to get your randomized character! You can also fill out the prompts or mix and match to get a random character. 
               <br></br>
               This is a choose your own adventure character creation!
            </p>
            <br></br>
            <br></br>
            <div className='charLevel'>
               <label>
                  Level
                  <input
                     type='number'
                     id='char-level'
                     name='level'
                     value={randomizerFormValues.level}
                     onChange={changeInput}
                  />
                  <input
                     type='button'
                     id='level random-btn'
                     name='level'
                     value='Randomize'
                     onClick={(event, value) => randomLevel(event, value)}
                  />
               </label>
               <div className='errors'>
                     {randomizerErrors.level}
               </div>
            </div>
            <div className='charRace'>
               <label>
                  Race
                  <select
                     name='race'
                     id='char-race'
                     value={randomizerFormValues.race}
                     onChange={changeInput}
                  >
                     <option value=''>Select Race</option>
                     {/* Mapping the class options with the API - allows randomizer to change option on form */}
                     {
                        raceArr.map(item => <option key={item.race} value={item.race}>{item.race}</option>)
                     }
                  </select>
                  <input
                     type='button'
                     id='race random-btn'
                     name='race'
                     value='Randomize'
                     onClick={event => randomRace(event)}
                  />
               </label>
               <div className='errors'>
                     {randomizerErrors.race}
               </div>
            </div>
            <div className='charFirstName'>
               <label>
                  First Name
                  <input
                     type='text'
                     id='char-first-name'
                     name='first_name'
                     value={randomizerFormValues.first_name}
                     onChange={changeInput}
                  />
                  <input
                     type='button'
                     id='first-name random-btn'
                     name='first_name'
                     value='Randomize'
                     onClick={null}
                  />
               </label>
               <div className='errors'>
                     {randomizerErrors.first_name}
               </div>
            </div>
            <div className='charLastName'>
               <label>
                  Last Name
                  <input
                     type='text'
                     id='char-last-name'
                     name='last_name'
                     value={randomizerFormValues.last_name}
                     onChange={changeInput}
                  />
                  <input
                     type='button'
                     id='last-name random-btn'
                     name='last_name'
                     value='Randomize'
                     onClick={null}
                  />
               </label>
               <div className='errors'>
                     {randomizerErrors.last_name}
               </div>
            </div>
            <div className='charClass'>
               <label>
                  Class
                  <select
                     name='class'
                     id='char-class'
                     value={randomizerFormValues.class}
                     onChange={changeInput}
                  >
                     <option value=''>Select Class</option>
                     {/* Mapping the class options with the API - allows randomizer to change option on form */}
                     {
                        classArr.map(item => <option key={item.class} value={item.class}>{item.class}</option>)
                     }
                  </select>
                  <input
                     type='button'
                     id='class random-btn'
                     name='class'
                     value='Randomize'
                     onClick={event => randomClass(event)}
                  />
               </label>
               <div className='errors'>
                     {randomizerErrors.class}
               </div>
            </div>
            <div className='charClassFocus'>
               <label>
                  Class Focus
                  {/* Want to change this to a select that changes what focus choices are based on the class selected (above) */}
                  <select
                     type='text'
                     id='char-class-focus'
                     name='class_focus'
                     value={randomizerFormValues.class_focus}
                     onChange={changeInput}
                  >
                     {/* Mapping the class focus options with the API - allows randomizer to change option on form */}
                     { focusOptions() }
                  </select>
                  <input
                     type='button'
                     id='class-focus random-btn'
                     name='class_focus'
                     value='Randomize'
                     onClick={event => randomFocus(event)}
                     disabled={!classSelected()}
                  />
               </label>
               <div className='errors'>
                     {randomizerErrors.class_focus}
               </div>
            </div>
            <div className='charAlignment'>
               <label>
                  Alignment
                  <select
                     name='alignment'
                     id='char-alignment'
                     value={randomizerFormValues.alignment}
                     onChange={changeInput}
                  >
                     <option value=''>Select Alignment</option>
                     {/* Mapping the alignment options with the API - allows randomizer to change option on form */}
                     {
                        alignArr.map(item => <option key={item.alignment} value={item.alignment}>{item.alignment} ({item.acronym})</option>)
                     }                     
                  </select>
                  <input
                     type='button'
                     id='alignment random-btn'
                     name='alignment'
                     value='Randomize'
                     onClick={event => randomAlignment(event)}
                  />
               </label>
               <div className='errors'>
                     {randomizerErrors.alignment}
               </div>
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
                        onChange={changeInput}
                     />
                     <input
                        type='button'
                        id='strength random-btn'
                        name='strength'
                        value='Randomize'
                        onClick={event => randomAbilityScore(event)}
                     />
                  </label>
                  <div className='errors'>
                     {randomizerErrors.strength}
               </div>
               </div>
               <div className='dexterity-div'>
                  <label>
                     Dexterity
                     <input
                        type='number'
                        id='dexterity random-btn'
                        name='dexterity'
                        value={randomizerFormValues.dexterity}
                        onChange={changeInput}
                     />
                     <input
                        type='button'
                        id='dexterity random-btn'
                        name='dexterity'
                        value='Randomize'
                        onClick={event => randomAbilityScore(event)}
                     />
                  </label>
                  <div className='errors'>
                     {randomizerErrors.dexterity}
               </div>
               </div>
               <div className='constitution-div'>
                  <label>
                     Constitution
                     <input
                        type='number'
                        id='constitution random-btn'
                        name='constitution'
                        value={randomizerFormValues.constitution}
                        onChange={changeInput}
                     />
                     <input
                        type='button'
                        id='constitution random-btn'
                        name='constitution'
                        value='Randomize'
                        onClick={event => randomAbilityScore(event)}
                     />
                  </label>
                  <div className='errors'>
                     {randomizerErrors.constitution}
               </div>
               </div>
               <div className='intelligence-div'>
                  <label>
                     Intelligence
                     <input
                        type='number'
                        id='intelligence random-btn'
                        name='intelligence'
                        value={randomizerFormValues.intelligence}
                        onChange={changeInput}
                     />
                     <input
                        type='button'
                        id='intelligence random-btn'
                        name='intelligence'
                        value='Randomize'
                        onClick={event => randomAbilityScore(event)}
                     />
                  </label>
                  <div className='errors'>
                     {randomizerErrors.intelligence}
               </div>
               </div>
               <div className='wisdom-div'>
                  <label>
                     Wisdom
                     <input
                        type='number'
                        id='wisdom random-btn'
                        name='wisdom'
                        value={randomizerFormValues.wisdom}
                        onChange={changeInput}
                     />
                     <input
                        type='button'
                        id='wisdom random-btn'
                        name='wisdom'
                        value='Randomize'
                        onClick={event => randomAbilityScore(event)}
                     />
                  </label>
                  <div className='errors'>
                     {randomizerErrors.wisdom}
               </div>
               </div>
               <div className='charisma-div'>
                  <label>
                     Charisma
                     <input
                        type='number'
                        id='charisma random-btn'
                        name='charisma'
                        value={randomizerFormValues.charisma}
                        onChange={changeInput}
                     />
                     <input
                        type='button'
                        id='charisma random-btn'
                        name='charisma'
                        value='Randomize'
                        onClick={event => randomAbilityScore(event)}
                     />
                  </label>
                  <div className='errors'>
                     {randomizerErrors.charisma}
               </div>
               </div>
               <div className='charGender'>
                  <label>
                     Gender
                     <select
                        name='gender'
                        id='char-gender'
                        value={randomizerFormValues.gender}
                        onChange={changeInput}
                     >
                        <option value=''>Select Gender</option>
                        {/* Mapping the gender options with the API - allows randomizer to change option on form */}
                        {
                           genderArr.map(item => <option key={item.gender} value={item.gender}>{item.gender}</option>)
                        }   
                     </select>
                     <input
                        type='button'
                        id='gender random-btn'
                        name='gender'
                        value='Randomize'
                        onClick={event => randomGender(event)}
                     />
                  </label>
                  <div className='errors'>
                     {randomizerErrors.gender}
               </div>
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
                        onChange={changeInput}
                     />
                     <input
                        type='button'
                        id='height random-btn'
                        name='height'
                        value='Randomize'
                        onClick={null}
                     />
                  </label>
                  <div className='errors'>
                     {randomizerErrors.height}
               </div>
               </div>
               <div className='charAge'>
                  <label>
                     Age
                     <input
                        type='number'
                        id='char-age'
                        name='age'
                        value={randomizerFormValues.age}
                        onChange={changeInput}
                     />
                     <input
                        type='button'
                        id='age random-btn'
                        name='age'
                        value='Randomize'
                        onClick={null}
                     />
                  </label>
                  <div className='errors'>
                     {randomizerErrors.age}
               </div>
               </div>
               <div className='charWeight'>
                  <label>
                     Weight
                     <input
                        type='number'
                        id='char-weight'
                        name='weight'
                        value={randomizerFormValues.weight}
                        onChange={changeInput}
                     />
                     <input
                        type='button'
                        id='weight random-btn'
                        name='weight'
                        value='Randomize'
                        onClick={null}
                     />
                  </label>
                  <div className='errors'>
                     {randomizerErrors.weight}
               </div>
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
                        onChange={changeInput}
                     />
                     <input
                        type='button'
                        id='physical-description random-btn'
                        name='physical_description'
                        value='Randomize'
                        onClick={null}
                     />
                  </label>
                  <div className='errors'>
                     {randomizerErrors.description}
               </div>
               </div>
               <div className='charBackground'>
                  <label>
                     Background
                     <select
                        id='char-background'
                        name='background'
                        value={randomizerFormValues.background}
                        onChange={changeInput}
                     >
                        <option value=''>Select Background</option>
                        {/* Mapping the gender options with the API - allows randomizer to change option on form */}
                        {
                           backgroundArr.map(item => <option key={item.background} value={item.background}>{item.background}</option>)
                        }   
                     </select>
                     <input
                        type='button'
                        id='background random-btn'
                        name='background'
                        value='Randomize'
                        onClick={event => randomBackground(event)}
                     />
                  </label>
                  <div className='errors'>
                     {randomizerErrors.background}
               </div>
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