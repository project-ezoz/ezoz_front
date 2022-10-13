import { useLocation } from "react-router-dom";
import Main from "../components/Main";
import Post from "../components/Post";
import PostApply from "../components/PostApply";
import PostInterview from "../components/PostInterview";
import PostMap from "../components/PostMap";

function Home() {
  const loginState = useLocation();
  return (
    <div>
      <Main isLogin={loginState} />
      <Post />
      <PostMap />
      <PostInterview />
      <PostApply />
    </div>
  );
}

export default Home;
