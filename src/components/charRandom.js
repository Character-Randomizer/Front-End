import React from 'react';
import { NavLink } from 'react-router-dom'

import { StyledBtns, StyledNav } from '../Styles';
//will use the data below to map through the arrays and get the options in the array
// import { raceOptions, classOptions } from './randomizer-Data';


export default function CharRandomizer() {
   return (
      <>
         <header className="header">
            <h1>Randomized Character Creator</h1>

            <nav>
               <StyledNav>
                  <StyledBtns>
                     <NavLink to={`/`} id='home link'>
                        <div className='home btn'>Home</div>
                     </NavLink>
                  </StyledBtns>
                  <StyledBtns>
                     <NavLink to={`/character-randomizer`} id='randomizer link'>
                        <div className='randomizer btn'>Randomizer</div>
                     </NavLink>
                  </StyledBtns>
                  <StyledBtns>
                     <NavLink to={`/about`} id='about link'>
                        <div className='about btn'>About</div>
                     </NavLink>
                  </StyledBtns>
                  <StyledBtns>
                     <NavLink to={`/contact`} id='contact link'>
                        <div className='contact btn'>Contact</div>
                     </NavLink>
                  </StyledBtns>
                  <StyledBtns>
                     <NavLink to={`/login`} id='login link'>
                        <div className='login btn'>Login</div>
                     </NavLink>
                  </StyledBtns>
               </StyledNav>
            </nav>
         </header>

         <h2>Character Creation Randomizer</h2>

         <form id='charactor-randomizer-form' onSubmit={null}>
            <p className='randomizer-prompt'>Use the prompts below and click Create to get your randomized (or not) character!</p>
            <div className='charFirstName'>
               <label>
                  First Name
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
               </label>
            </div>
            <div className='charLastName'>
               <label>
                  Last Name
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
               </label>
            </div>
            <div className='charLevel'>
               <label>
                  Level
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
               </label>
            </div>
            <div className='charRace'>
               <label>
                  Race
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
               </label>
            </div>
            <div className='charClass'>
               <label>
                  Class
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
               </label>
            </div>

         </form>

         <footer>
            <nav>
               <StyledNav>
                  <StyledBtns>
                     <NavLink to={`/`} id='home link'>
                        <div className='home btn'>Home</div>
                     </NavLink>
                  </StyledBtns>
                  <StyledBtns>
                     <NavLink to={`/character-randomizer`} id='randomizer link'>
                        <div className='randomizer btn'>Randomizer</div>
                     </NavLink>
                  </StyledBtns>
                  <StyledBtns>
                     <NavLink to={`/about`} id='about link'>
                        <div className='about btn'>About</div>
                     </NavLink>
                  </StyledBtns>
                  <StyledBtns>
                     <NavLink to={`/contact`} id='contact link'>
                        <div className='contact btn'>Contact</div>
                     </NavLink>
                  </StyledBtns>
                  <StyledBtns>
                     <NavLink to={`/login`} id='login link'>
                        <div className='login btn'>Login</div>
                     </NavLink>
                  </StyledBtns>
               </StyledNav>
            </nav>
            <div className="copyright">
               <p>&copy Copyright Character Randomizer</p>
            </div>
         </footer>
      </>
   )
}