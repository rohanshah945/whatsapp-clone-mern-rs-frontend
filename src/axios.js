import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsapp-clone-mern-rs.herokuapp.com/",
});

export default instance;
