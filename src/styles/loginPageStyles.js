import styled from 'styled-components';

const StyledForm = styled.form`
   display: flex;
   justify-content: center;
   padding: 4% 0 2% 0;
   flex-wrap: wrap;
`

const StyledH2 = styled.h2`
   font-size: 4rem;
   font-weight: 600;
   padding-bottom: 4%;
`

const StyledLabels = styled.label`
   font-size: 2rem;
   padding: 1%;
   display: flex;
   align-content: flex-start;
`

const StyledLoginSignupBtnDiv = styled.div`
   padding: 6% 0 2% 0;
`

const StyledInputs = styled.input`
   margin-left: 3%;
   width:35%;
   display: flex;
   height: 4vh;
   font-size: 1.8rem;
   padding: 0.5% 1.5% 0.5% 1.5%;
`

const VisibilityDiv = styled.div`
`

export { StyledForm, StyledLabels, StyledH2, StyledLoginSignupBtnDiv, StyledInputs, VisibilityDiv }