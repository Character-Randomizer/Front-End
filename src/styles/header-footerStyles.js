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

const StyledHeaderNav = styled.nav`
   width: 100%;
   display: flex;
   justify-content: space-evenly;
   background-color: #846B8A;
`

const StyledFooterNav = styled.nav`
   width: 50%;
   display: flex;
   justify-content: space-evenly;
   background-color: #C8B0CF;
   padding: 6% 0 2% 0;
`

const StyledTopBtns = styled.div`
   display:flex;
   justify-content: center;
   textDecoration: none;
   background-color: #846B8A;
   flex-flow: row wrap;
   padding: 1%;
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
   width: 50%;
`

const StyledCopyrightDiv = styled.div`
   width: 100%;
`

const StyledCopyrightP = styled.p`
   padding: 2%;
   padding-top: 3%;
`

export { StyledHeader, StyledHeaderNav, StyledFooterNav, StyledTopBtns, StyledBtmBtns, StyledFooter, StyledTopBtnDiv, StyledH1, StyledCopyrightDiv, StyledCopyrightP }