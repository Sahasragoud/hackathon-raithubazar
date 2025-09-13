import API from "./Api";

const AuthService = {
  registerSeller: (data: any) => API.post("/auth/register", data),
  login: (data: any) => API.post("/auth/login", data)
};

export default AuthService;
