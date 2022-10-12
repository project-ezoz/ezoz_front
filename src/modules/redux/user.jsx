import axios from "axios";

const GoogleLogin = (code) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "GET",
      url: `https://ezoz-trip.com/api/oauth/google?code=${code}`,
    })
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임
        const ACCESS_TOKEN = res.data.accessToken;
        localStorage.setItem("token", ACCESS_TOKEN); //예시로 로컬에 저장함
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
      });
  };
};

const actionCreators = {
  GoogleLogin,
};
export { actionCreators };
