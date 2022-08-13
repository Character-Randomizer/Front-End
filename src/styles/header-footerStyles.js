import styled from 'styled-components';

const StyledHeader = styled.header`
   display:flex;
   justify-content: center;
   background-color: #C8B0CF;
   flex-wrap: wrap;
`

const StyledH1 = styled.h1`
   padding: 2% 0;
   width: 100%;
   color: #220C10;
   font-weight: 800;
`

const StyledFooter = styled.footer`
   display:flex;
   justify-content: center;
   flex-wrap: wrap;
   background-color: #C8B0CF;
`

const StyledNav = styled.nav`
   width: 100%;
   display: flex;
   justify-content: space-evenly;
   background-color: #846B8A;
`
// Need to make two styled navs: one for the header background color and one for the footer background color

const StyledTopBtns = styled.div`
   display:flex;
   justify-content: center;
   textDecoration: none;
   background-color: #C8B0CF;
   flex-flow: row wrap;
`

const StyledTopBtnDiv = styled.div`
   color: #f5f0f6;
   background-color: #846B8A;
   font-size: 1.8rem;
`

const StyledBtmBtns = styled.div`
   display:flex;
   justify-content: center;
   textDecoration: none;
   background-color: #C8B0CF;
   flex-flow: row wrap;
`

const StyledBtmBtnDiv = styled.div`
   
   `

export { StyledHeader, StyledNav, StyledTopBtns, StyledBtmBtns, StyledFooter, StyledTopBtnDiv, StyledBtmBtnDiv, StyledH1 }