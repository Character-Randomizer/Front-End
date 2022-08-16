import styled from 'styled-components';

//May not need:
const StyledContactForm = styled.form`
   display: flex;
   justify-content: center;
   padding: 4% 0 2% 0;
`

const StyledH2 = styled.h2`
   font-size: 4rem;
   font-weight: 600;
   padding-bottom: 2%;
   width: 100%;
`

const StyledFormDiv = styled.div`
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   width: 60%;
   border: 5px solid black;
   margin: 2% 0 2% 0;
   padding: 2%;
`

const StyledInputDiv = styled.div`
   width: 45%;
   
`

const StyledContactLabels = styled.label`
   width: 100%;
   font-size: 2rem;
   padding: 1%;
   display: flex;
   justify-content: center;
   margin: 4% 0 3% 0;
`

const StyledInputs = styled.input`
   width: 100%;
   margin-bottom: 4%;
   height: 4vh;
   font-size: 1.8rem;
   padding: 0.5% 1.5% 0.5% 1.5%;
`

export { StyledFormDiv, StyledInputDiv, StyledContactLabels, StyledInputs, StyledH2 }