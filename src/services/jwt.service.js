const JwtService = {
  getLocalAccessToken: () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
  },
  
  getUser: () => {
    return JSON.parse(localStorage.getItem("user"));
  },

  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  },

  removeUser: () => {
    localStorage.removeItem("user");
  },
};

export default JwtService;
