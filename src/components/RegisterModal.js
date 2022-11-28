import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import AuthService from "../services/auth.service";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";

const RegisterModal = ({ show, setShow, renderComp, setRenderComp }) => {
  const onChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onClickRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await AuthService.register(
        inputs.username,
        inputs.email,
        inputs.name,
        inputs.phoneNumber,
        inputs.password
      );
      if (res.status === 200) {
        setRenderComp(
          <Alert
            type="success"
            text={`Register Success! Proceed to login
            `}
          />
        );
        setTimeout(() => setRenderComp(""), 1000);
        setTimeout(() => navigate("/feeds"), 500);
      }
    } catch (res) {
      console.log(res);
      setRenderComp(<Alert type="danger" text={res.response.data.message} />);
      setTimeout(() => setRenderComp(""), 1000);
    }
  };
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    name: "",
    phoneNumber: "",
    password: "",
  });
  return (
    <React.Fragment>
      <Modal show={show} size="xl" popup={true} onClose={() => setShow(false)}>
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
        <div class="py-4 px-6 flex justify-center w-full h-full rounded-t mt-8"></div>
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-3xl font-medium text-gray-900 dark:text-white">
              Create your account
            </h3>
            <form
              className="flex flex-col border border-gray-50 gap-4 peer-focus:border-blue-500"
              onSubmit={onClickRegister}
            >
              <div class="relative">
                <input
                  type="text"
                  id="floating_filled"
                  name="name"
                  class="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 dark:bg-gray-700 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={onChange}
                />
                <label
                  for="floating_filled"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Name
                </label>
                <label class="absolute hidden peer-focus:block text-xs text-gray-500 dark:text-gray-400 top-1 z-10 right-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  {inputs.name.length}/50
                </label>
              </div>
              <div class="relative">
                <input
                  type="text"
                  id="floating_filled"
                  name="username"
                  class="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 dark:bg-gray-700 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={onChange}
                />
                <label
                  for="floating_filled"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Username
                </label>
                <label class="absolute hidden peer-focus:block text-xs text-gray-500 dark:text-gray-400 top-1 z-10 right-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  {inputs.username.length}/8
                </label>
              </div>
              <div class="relative">
                <input
                  type="text"
                  id="floating_filled"
                  name="phoneNumber"
                  class="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 dark:bg-gray-700 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={onChange}
                />
                <label
                  for="floating_filled"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Phone
                </label>
              </div>
              <div class="relative">
                <input
                  type="text"
                  id="floating_filled"
                  name="email"
                  class="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 dark:bg-gray-700 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={onChange}
                />
                <label
                  for="floating_filled"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Email
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
                  Register
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

export default RegisterModal;
