import Main from "../components/Main";
import Post from "../components/Post";
import PostApply from "../components/PostApply";
import PostInterview from "../components/PostInterview";
import PostMap from "../components/PostMap";

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
