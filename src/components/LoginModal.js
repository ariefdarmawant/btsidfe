import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import AuthService from "../services/auth.service";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ show, setShow, renderComp, setRenderComp }) => {
  const onChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onClickLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await AuthService.login(inputs.query, inputs.password);
      if (res.status === 200) {
        setRenderComp(
          <Alert
            type="success"
            text={`Login Success! Welcome ${
              JSON.parse(localStorage.getItem("user")).name
            }`}
          />
        );
        setTimeout(() => setRenderComp(""), 1000);
        setTimeout(() => navigate("/feeds"),500)
      }
    } catch (res) {
      setRenderComp(<Alert type="danger" text={res.response.data.message} />);
      setTimeout(() => setRenderComp(""), 1000);
    }
  };
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    query: "",
    password: "",
  });
  return (
    <React.Fragment>
      <Modal show={show} size="xl" popup={true}>
        <button
          type="button"
          class="absolute top-3 left-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          onClick={() => setShow(false)}
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="py-4 px-6 flex justify-center w-full h-full rounded-t">
          <svg
            viewBox="0 0 24 24"
            aria-label="Twitter"
            role="img"
            class="w-7 h-7 fill-current text-blue-500   "
          >
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>
        </div>
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 justify-center items-center flex flex-col items-center">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Sign in to Twitter
            </h3>
            <form
              onSubmit={onClickLogin}
              className="flex flex-col border border-gray-50 gap-4 peer-focus:border-blue-500 w-full"
            >
              <div class="relative">
                <input
                  type="text"
                  id="floating_filled"
                  name="query"
                  class="block break-words rounded-lg px-2.5  w-full pb-2.5 pt-5 text-sm text-gray-900 dark:bg-gray-700 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={onChange}
                />
                <label
                  for="floating_filled"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Phone, email, or username
                </label>
              </div>
              <div class="relative">
                <input
                  type="password"
                  id="floating_filled"
                  name="password"
                  class="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 dark:bg-gray-700 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={onChange}
                />
                <label
                  for="floating_filled"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Password
                </label>
              </div>
            <div className="w-full">
              <Button
                type="submit"
                className="w-full rounded-r-3xl rounded-l-3xl bg-black mt-10"
              >
                Login
              </Button>
            </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      {renderComp}
    </React.Fragment>
  );
};

export default LoginModal;
