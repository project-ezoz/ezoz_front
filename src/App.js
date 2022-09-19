import styled from "styled-components";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Home from "./pages/Home";

const Style = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Style>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </Style>
  );
}

export default App;
