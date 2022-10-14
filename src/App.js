import styled from "styled-components";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import CallbackGoogle from "./api/CallbackGoogle";
import Logout from "./components/Logout";
import Map from "./pages/Map";

const Style = styled.div`
  width: 1000px;
  height: 100vh;
  margin: 0 auto;
`;

function App() {
  /*  로그인 후 정보 가져와서 작가 vs 사용자별 컴포넌트 나누기
      로그인 성공 시 -> Main props로 Logout 버튼 변경
   const [isLogin, setIsLogin] = useState(false);

   useEffect(() => {
    const initLogin = async () => {
      const res = await getUserInfo();
      setIsLogin(!!res);
    };
    initLogin();
   }, []);
   */

  return (
    <Style>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Auth />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/map" element={<Map />}></Route>
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
