import React from 'react';
import { NavLink } from 'react-router-dom'

export default function SignUp() {
   return (
      <>
         <header className="header">
            <h1>Randomized Character Creator</h1>

            <nav>
               <div className='top-btns'>
                  <NavLink to={`/`} id='home link'>
                     <div className='home btn'>Home</div>
                  </NavLink>
                  <NavLink to={`/character-randomizer`} id='randomizer link'>
                     <div className='randomizer btn'>Randomizer</div>
                  </NavLink>
                  <NavLink to={`/about`} id='about link'>
                     <div className='about btn'>About</div>
                  </NavLink>
                  <NavLink to={`/contact`} id='contact link'>
                     <div className='contact btn'>Contact</div>
                  </NavLink>
                  <NavLink to={`/login`} id='login link'>
                     <div className='login btn'>Login</div>
                  </NavLink>
               </div>
            </nav>
         </header>

         <footer>
            <nav>
               <div className='btm-btns'>
                  <NavLink to={`/`} id='home link'>
                     <div className='home btn'>Home</div>
                  </NavLink>
                  <NavLink to={`/character-randomizer`} id='randomizer link'>
                     <div className='randomizer btn'>Randomizer</div>
                  </NavLink>
                  <NavLink to={`/about`} id='about link'>
                     <div className='about btn'>About</div>
                  </NavLink>
                  <NavLink to={`/contact`} id='contact link'>
                     <div className='contact btn'>Contact</div>
                  </NavLink>
                  <NavLink to={`/login`} id='login link'>
                     <div className='login btn'>Login</div>
                  </NavLink>
               </div>
            </nav>
            <div className="copyright">
               <p>&copy Copyright Character Randomizer</p>
            </div>
         </footer>
      </>
   )
}