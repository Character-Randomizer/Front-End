import styled from 'styled-components'

const StyledH2 = styled.h2`
   font-size: 3.8rem;
   padding-bottom: 2%;
   width: 100%;
`
const StyledDivWidth60 = styled.div`
   width: 60%;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   padding: 1% 0;
`

const StyledDivWidth100 = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   width: 100%;
`

const StyledTermLabel = styled.label`
   font-size: 2rem;
   padding: 1%;
   display: flex;
   justify-content: center;
   width: 100%;
`
const StyledInputs = styled.input`
   margin-left: 3%;
   width:80%;
   display: flex;
   height: 4vh;
   font-size: 1.8rem;
   padding: 0.5% 1.5% 0.5% 1.5%;
`

const StyledDobInput = styled.input`
   margin-left: 3%;
   width: 20%;
   display: flex;
   height: 4vh;
   font-size: 1.8rem;
   padding: 0.5% 1.5% 0.5% 1.5%;
`

const StyledTermInput = styled.input`
   width: 15%;
   height: 2.1rem;
   margin: 4% 0;
`
const StyledLabels = styled.label`
   font-size: 2rem;
   padding: 1%;
   display: flex;
   justify-content: center;
   width: 100%;
`


export { StyledH2, StyledDivWidth60, StyledDivWidth100, StyledTermLabel, StyledInputs, StyledTermInput, StyledDobInput, StyledLabels }