import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { useState } from "react";
import Character from "./Character";
//import axios from "axios";
import { useEffect } from "react";
import { useMemo } from "react";

const StyledButton = styled.button`
  border: 5px solid white;
  cursor: pointer;
  background-color: blue;
  border-radius: 20%;
  color: white;
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1rem;
  margin: 1rem 0;
  left: 400px;
  position: relative;
  margin-right: 1rem;
`;
const StyledButton2 = styled(StyledButton)`
  background-color: green;
`;
const StyleCharacters = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const StyledTitle = styled.h2`
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Characters = () => {
  const [page, setpage] = useState(0);

  const fetchdata = async (page) => {
    const response =  await fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=50&_page=${page}`
    );
    const data = await response.json();
    return data;
  };
  useEffect(() => {
    fetchdata();
  }, [page]) ;

  const { data, status, isFetching } = useQuery(
    ["character", page],
    () => fetchdata(page),
    {
      keepPreviousData: true,
    }
  );

  if (isFetching || status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Page not found</div>;
  }
  console.log(data);

  return (
    <>
      <StyledTitle>
        Fetching API using React Query & Styled Components & Optimization
      </StyledTitle>
      <StyleCharacters>
        {data.map((element, id) => {
          return <Character key={id} fetchedData={element} />;
        })}
      </StyleCharacters>
      <br />

      <StyledButton
        disabled={page === 1}
        onClick={() => {
          setpage((page) => page - 1);
        }}
        className="prevpage"
      >
        Previous
      </StyledButton>
      <StyledButton2
        disabled={page === 100}
        onClick={() => {
          setpage((page) => page + 1);
        }}
        className="nextpage"
      >
        Next
      </StyledButton2>
    </>
  );
};

export default React.memo(Characters);
