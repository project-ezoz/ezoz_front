import styled from "styled-components";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import About from "./pages/About";
import Map from "./pages/Map";
import Journal from "./pages/Journal";
import CallbackGoogle from "./api/CallbackGoogle";
import Logout from "./components/Auth/Logout";

const Style = styled.div`
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
`;

function App() {
  return (
    <Style>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/login" element={<Auth />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route
            path="/auth/google/callback"
            element={<CallbackGoogle />}
          ></Route>

          <Route path="/map" element={<Map />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/journal" element={<Journal />}></Route>
        </Routes>
      </BrowserRouter>
    </Style>
  );
}

export default App;
