import styled from "styled-components";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import Main from "./pages/Main";

import CallbackGoogle from "./api/CallbackGoogle";
import Logout from "./components/Auth/Logout";

const Style = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;

function App() {
  return (
    <Style>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>

          <Route path="/login" element={<Auth />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route
            path="/auth/google/callback"
            element={<CallbackGoogle />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Style>
  );
}

export default App;
