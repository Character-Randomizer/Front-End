import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'

import { StyledHeader, StyledTopBtns, StyledBtmBtns, StyledHeaderNav, StyledFooterNav, StyledFooter, StyledTopBtnDiv, StyledH1, StyledCopyrightDiv, StyledCopyrightP } from '../styles/header-footerStyles';

//State Management - Context API
import { UserContext } from '../contextAPI';

function Header() {
   const userContext = useContext(UserContext)

   const token = localStorage.getItem('token')

   const navigate = useNavigate()
   const redirectLogin = () => { return navigate('/login') }

   //Logging out the user:
   const logout = () => {
      localStorage.removeItem('token')
      redirectLogin()
   }

   return (
      <>
         <StyledHeader>
            <StyledH1>Randomized Character Creator</StyledH1>

            <StyledHeaderNav>
               <StyledTopBtns>
                  <NavLink to={`/`}>
                     <StyledTopBtnDiv>Home</StyledTopBtnDiv>
                  </NavLink>
               </StyledTopBtns>
               <StyledTopBtns>
                  <NavLink to={`/character-randomizer`}>
                     <StyledTopBtnDiv>Randomizer</StyledTopBtnDiv>
                  </NavLink>
               </StyledTopBtns>

               {!token ?
                  <>
                     <StyledTopBtns>
                        <NavLink to={`/login`}>
                           <StyledTopBtnDiv>Login</StyledTopBtnDiv>
                        </NavLink>
                     </StyledTopBtns>
                     <StyledTopBtns>
                        <NavLink to={`/signup`}>
                           <StyledTopBtnDiv>Sign Up</StyledTopBtnDiv>
                        </NavLink>
                     </StyledTopBtns>
                  </>
                  :
                  <>
                     <StyledTopBtns>
                        <NavLink to={`/${userContext.user.user_id}/created-characters`}>
                           <StyledTopBtnDiv>Characters</StyledTopBtnDiv>
                        </NavLink>
                     </StyledTopBtns>
                     <StyledTopBtns>
                        <NavLink to={`/users/${userContext.user.user_id}`}>
                           <StyledTopBtnDiv>Account</StyledTopBtnDiv>
                        </NavLink>
                     </StyledTopBtns>
                     <StyledTopBtns>
                        <StyledTopBtnDiv id='logout' onClick={logout}>Logout</StyledTopBtnDiv>
                     </StyledTopBtns>
                  </>
               }
            </StyledHeaderNav>
         </StyledHeader>
      </>
   )
}


function Footer() {
   const userContext = useContext(UserContext)

   const token = localStorage.getItem('token')

   return (
      <>
         <StyledFooter>
            <StyledFooterNav>
               <StyledBtmBtns>
                  <NavLink to={`/`} className='home btmLink'>
                     <div>Home</div>
                  </NavLink>
               </StyledBtmBtns>
               <StyledBtmBtns>
                  <NavLink to={`/character-randomizer`} className='randomizer btmLink'>
                     <div>Randomizer</div>
                  </NavLink>
               </StyledBtmBtns>
               <StyledBtmBtns>
                  <NavLink to={`/contact`} className='contact btmLink'>
                     <div>Contact</div>
                  </NavLink>
               </StyledBtmBtns>
               {!token ?
                  <>
                     <StyledBtmBtns>
                        <NavLink to={`/login`} className='login btmLink'>
                           <div>Login</div>
                        </NavLink>
                     </StyledBtmBtns>
                     <StyledBtmBtns>
                        <NavLink to={`/signup`}>
                           <div>Sign Up</div>
                        </NavLink>
                     </StyledBtmBtns>
                  </>
                  :
                  <>
                     <StyledBtmBtns>
                        <NavLink to={`/${userContext.user.user_id}/created-characters`} className='contact btmLink'>
                           <div>Characters</div>
                        </NavLink>
                     </StyledBtmBtns>
                     <StyledBtmBtns>
                        <NavLink to={`/users/${userContext.user.user_id}`} className='contact btmLink'>
                           <div>Account</div>
                        </NavLink>
                     </StyledBtmBtns>
                  </>
               }
            </StyledFooterNav>

            <StyledCopyrightDiv className="copyright">
               <StyledCopyrightP>&copy; Copyright Character Randomizer</StyledCopyrightP>
            </StyledCopyrightDiv>
         </StyledFooter>
      </>
   )
}


export { Header, Footer }