import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:9090/api",
});

// No token attached anymore
// No interceptor for request

// ✅ Keep response interceptor for handling 401
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Session expired or invalid
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      window.location.href = "/login"; // force redirect to login
    }
    return Promise.reject(error);
  }
);

export default API;
