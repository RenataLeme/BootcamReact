import axios from "axios";

export const api = axios.create({
  baseURL: "https://webservices.jumpingcrab.com/",
});
