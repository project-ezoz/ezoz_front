import Main from "./components/Main";
import Post from "./components/Post";
import PostApply from "./components/PostApply";
import PostInterview from "./components/PostInterview";
import PostMap from "./components/PostMap";

const Style = {
  width: "100vw",
  height: "100vh",
};

function App() {
  return (
    <div style={Style}>
      <Main />
      <Post />
      <PostMap />
      <PostInterview />
      <PostApply />
    </div>
  );
}

export default App;
