import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Footer } from './header-footer'

//Styles:
import StyledButtons from '../styles/buttonStyles'
import { 
   AboutRandomizerH2, 
   DisclaimerP,
   SaveCharH2, 
   SaveCharH3, } from '../styles/homeStyles'

import npcs from '../images/npcs.jpeg'


export default function Home() {
   return (
      <>
         <Header />

         <div className="middle">
            <AboutRandomizerH2>About the Randomizer</AboutRandomizerH2>
            <p className="product">
               The character randomizer is designed for game masters (GMs) who need more NPC options in the table top role playing game, Dungeons and Dragons. The randomizer is designed for GMs to either fully randomize the NPC or to customize them. 
               <br /> <br />
               The full character randomizer can be used by either GMs or players who are looking to make characters easily. 
            </p>

            <div className="image">
               <img src={npcs} alt="Multiple headshots of different characters" />
            </div>
            {/* eslint-disable-next-line */}
            <p className="img-text">Picture from <a href="https://thenerdd.com/2021/01/15/7-steps-to-make-a-dd-npc"
               target="_blank">thenerdd.com</a></p>


            <SaveCharH2 className='save-char'>Saving Characters</SaveCharH2>
            <SaveCharH3>** Disclaimer ** <br></br> This is still being worked on </SaveCharH3>
            <DisclaimerP> You can sign up, but you will not be able to save your characters. <br></br>We are working on this feature. </DisclaimerP>
            <p className="saving">
               If you would like to save your characters on our website, you can create a free account with us.
            </p>

            <div className="button">
               <Link to={`/signup`}>
                  <StyledButtons className="signup">
                     Sign Up
                  </StyledButtons>
               </Link>
            </div>
         </div>

         <Footer />
      </>
   )
}