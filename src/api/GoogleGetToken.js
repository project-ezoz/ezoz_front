import axios from "axios";

const GoogleGetToken = (code) => {
  return function () {
    axios
      .get(`https://ezoz-trip.com/auth/google?code=${code}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
};