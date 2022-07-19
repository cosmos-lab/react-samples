import { useState } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import "./styles/main.scss"

function App(props: any) {
  return (
    <>
      <Header />
      <Layout/>
    </>
  );
}

export default App;
