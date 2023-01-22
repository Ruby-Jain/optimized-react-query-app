import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  width: 47%;
  background-image:black;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 1rem;
  margin-right: 1rem;
  display: flex;
`;

const Styledimage = styled.img`
  width: 10rem;
  height: 100%;
  border-radius: 20%;
`;
const Textcontainer = styled.div`
  padding: 1rem;
  color: white;
  font-size: 1.25rem;
`;

const Character = (props) => {
  return (
    <StyledCharacter>
      <Styledimage src={props.fetchedData.thumbnailUrl}></Styledimage>
      <Textcontainer>
        <h2>{props.fetchedData.title}</h2>
        <p>
          {props.fetchedData.id} 
        </p>
        <p>{props.fetchedData.title}</p>
      </Textcontainer>
    </StyledCharacter>
  );
};

export default React.memo(Character);
