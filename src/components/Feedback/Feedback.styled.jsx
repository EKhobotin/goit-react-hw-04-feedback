import styled from "styled-components";

export const FeedbackDiv = styled.div`
background-color: teal;
padding: 10px;
margin-top: 20px;
border-radius: 15px;
width: 500px;
text-align: center;
`;

export const ButtonDiv = styled.div`
display: flex;
justify-content: space-evenly;`

export const Button = styled.button`
border-radius: 10px;
width: 100px;
height: 40px;
background-color: ${props=>props.name==="good"? "green":props.name==="neutral"?"yellow":"red"};

&:hover, &:focus {
  background-color: lightblue;  
  cursor: pointer;
}
`