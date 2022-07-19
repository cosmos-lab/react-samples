import { useState } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import "./styles/main.scss"

function App(props: any) {
  const [label, setLabel] = useState("My Counter");
  const [baseCount, setBaseCount] = useState(1);

  return (
    <>
      <Header />
      <Layout/>
    </>
  );
}

export default App;
