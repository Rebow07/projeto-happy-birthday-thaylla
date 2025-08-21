import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import FontPrimary from "./assests/themeProvider/fontPrimary";
import FontSecondary from "./assests/themeProvider/fontSecundary";
import LoadingPage from "./components/Loading/loading";
import Navbar from "./components/Navbar/navbar";
import Main from "./components/Main/main";
import PasswordGate from "./components/PasswordGate/PasswordGate"; // <-- importe aqui

const App = () => {
  const [unlocked, setUnlocked] = useState(false); // estado para controlar a liberação

  if (!unlocked) {
    return <PasswordGate onAccessGranted={() => setUnlocked(true)} />;
  }

  return (
    <>
      <LoadingPage />
      <BrowserRouter>
        <FontPrimary />
        <FontSecondary />
        <Navbar />
        <Main />
      </BrowserRouter>
    </>
  );
};

export default App;
