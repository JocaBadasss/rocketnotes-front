import axios from "axios"

export const api = axios.create({
  baseURL: "https://rocketnotes-api-qd93.onrender.com/",
})
