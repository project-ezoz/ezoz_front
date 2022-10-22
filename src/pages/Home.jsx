import Main from "../components/Main/Main";
import Post from "../components/Main/Post";
import PostApply from "../components/Main/PostApply";
import PostInterview from "../components/Main/PostInterview";
import PostMap from "../components/Main/PostMap";

function Home() {
  return (
    <div>
      <Main />
      <Post />
      <PostMap />
      <PostInterview />
      <PostApply />
    </div>
  );
}

export default Home;
