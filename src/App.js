import Characters from "./components/Characters";
import React from "react";
/* import "./App.css"; */
import { createGlobalStyle } from "styled-components";
import { QueryClientProvider, QueryClient } from "react-query";

export const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
  padding: 0;
  background-image: linear-gradient(to left,black, purple, black);
  color: white;
    max-width: 70rem;
    align-items: center;
    justify-content: center;
  margin: 0 auto;
}`;
/* const theme = {
  body: {
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
    backgroundColor: "black",
    color: "white",
    display: "flex",
  },
}; */

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Characters />
    </QueryClientProvider>
  );
}

export default React.memo(App);
