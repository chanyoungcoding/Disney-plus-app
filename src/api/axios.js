import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "5f423f41cf568a6542a203c043be3243",
    language: "ko-KR"
  }
});

export default instance