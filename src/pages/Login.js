import { Alert, Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const Login = () => {
  const onChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onClickLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await AuthService.login(inputs.username, inputs.password);
      if (res.status === 200) {
        setRenderComp(<Alert type="success" text={`Login Success!`} />);
        setTimeout(() => setRenderComp(""), 1000);
        setTimeout(() => navigate("/feeds"), 500);
      }
    } catch (res) {
      setRenderComp(<Alert type="danger" text={res.errorMessage} />);
      setTimeout(() => setRenderComp(""), 1000);
    }
  };
  const onClickRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await AuthService.register(
        inputs.username,
        inputs.email,
        inputs.password
      );
      if (res.status === 200) {
        setRenderComp(<Alert type="success" text={`Register Success!`} />);
        setTimeout(() => setRenderComp(""), 1000);
        setTimeout(() => navigate("/home"), 500);
      }
    } catch (res) {
      setRenderComp(<Alert type="danger" text={res.errorMessage} />);
      setTimeout(() => setRenderComp(""), 1000);
    }
  };
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [renderComp, setRenderComp] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/checklist");
    }
  }, [navigate]);
  return (
    <React.Fragment>
      <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 justify-center flex flex-col items-center h-screen">
        <h3 className="text-3xl font-bold text-gray-900">{isRegister ? "Register" : "Sign In"}</h3>
        <form
          onSubmit={isRegister ? onClickRegister : onClickLogin}
          className="flex flex-col border border-gray-50 gap-4 peer-focus:border-blue-500 w-full"
        >
          <div class="relative">
            <input
              type="text"
              id="floating_filled"
              name="username"
              class="block break-words rounded-lg px-2.5  w-full pb-2.5 pt-5 text-sm text-gray-900 border-gray-300 appearance-none border-graydark:-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={onChange}
            />
            <label
              for="floating_filled"
              class="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Username
            </label>
          </div>
          {isRegister && (
            <div class="relative">
              <input
                type="text"
                id="floating_filled"
                name="email"
                class="block break-words rounded-lg px-2.5  w-full pb-2.5 pt-5 text-sm text-gray-900 border-gray-300 appearance-none border-graydark:-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={onChange}
              />
              <label
                for="floating_filled"
                class="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Email
              </label>
            </div>
          )}
          <div class="relative">
            <input
              type="password"
              id="floating_filled"
              name="password"
              class="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={onChange}
            />
            <label
              for="floating_filled"
              class="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Password
            </label>
          </div>
          <div className="w-full">
            <Button
              type="submit"
              className="w-full rounded-r-3xl rounded-l-3xl bg-black mt-10"
            >
              {isRegister ? "Register" : "Login"}
            </Button>
          </div>
        </form>
        <div
          className="underline cursor-pointer"
          onClick={() => setIsRegister((prev) => !prev)}
        >
          {isRegister ? "Already have an account? Click here to login" : "Dont have an account? Register by clicking here"}
        </div>
      </div>
      {renderComp}
    </React.Fragment>
  );
};

export default Login;
