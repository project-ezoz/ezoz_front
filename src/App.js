import Main from "./components/Main";
import Post from "./components/Post";
import PostApply from "./components/PostApply";
import PostInterview from "./components/PostInterview";
import PostMap from "./components/PostMap";
import styled from "styled-components";

const Style = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Style>
      <Main />
      <Post />
      <PostMap />
      <PostInterview />
      <PostApply />
    </Style>
  );
}

export default App;
