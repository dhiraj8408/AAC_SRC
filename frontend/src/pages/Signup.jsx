import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@chakra-ui/react";
function Signup(props) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [message, setMessage] = useState(-1);
  const [submit, setSubmit] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();
  function handleChange(e) {
    switch (e.target.id) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "cpassword":
        setCpassword(e.target.value);
        break;
      case "enrollment":
        setEnrollment(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      default:
        break;
    }
  }

  function handleSubmit() {
    if (
      name === "" ||
      username === "" ||
      password === "" ||
      cpassword === "" ||
      enrollment === ""
    ) {
      setMessage(2);
      return;
    }
    if (password !== cpassword) {
      setMessage(3);
      return;
    }
    setSubmit(true);
    axios
      .post("http://localhost:5000/user/register", {
          name: name,
          username: username,
          enrollment: enrollment,
          password: password,
        }
      )
      .then((res) => {
        setMessage(res.data.message);
        setSubmit(false);
        if (res.data.message === 1) {
          inputClear();
        }
      });
  }
  function inputClear() {
    document.getElementById("name").value = "";
    document.getElementById("enrollment").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("cpassword").value = "";
    setName("");
    setEnrollment("");
    setUsername("");
    setPassword("");
    setCpassword("");
  }
  useEffect(() => {
    if (props.isLogin === true) {
      navigate("/addblog");
    }
  });
  useEffect(() => {
    setMessage(-1);
  }, [message]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative flex flex-col justify-center  overflow-hidden">
      <Navbar {...props} />
      <div className="my-10 w-5/6 lg:w-5/12 p-6 m-auto bg-white rounded-md shadow-xl border  ">
        <h1 className="text-xl  text-center text-black  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-person-fill-add m-auto mb-4"
            viewBox="0 0 16 16"
          >
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
          </svg>
          <span className="">SIGN UP</span>
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label for="name" className="block text-sm  text-gray-800">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              onChange={handleChange}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md  focus:ring-stone-800 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="enrollment number"
              className="block text-sm  text-gray-800"
            >
              Enrollment Number <span className="text-red-500">*</span>
            </label>
            <input
              id="enrollment"
              onChange={handleChange}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md  focus:ring-stone-800 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <Tooltip hasArrow label="Keep It Complex. IMPORTANT !!" bg="red.600">
            <div className="mb-2">
              <label for="email" className="block text-sm  text-gray-800">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                id="username"
                onChange={handleChange}
                type="email"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md  focus:ring-stone-800 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </Tooltip>
          <div className="mb-2">
            <label for="password" className="block text-sm  text-gray-800">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              onChange={handleChange}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:ring-stone-800 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label for="cpassword" className="block text-sm  text-gray-800">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              id="cpassword"
              onChange={handleChange}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md  focus:ring-stone-800 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6 mb-5">
            <Button
              onClick={handleSubmit}
              isLoading={submit}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-green-600 "
            >
              Sign Up
            </Button>
            {submit ? (
              <p className="text-center text-md mt-3">
                This may take time. Please Wait...
              </p>
            ) : (
              ""
            )}
          </div>
          {message === 0
            ? toast({
                title: "Some Error Occured",
                description: "Please Try Again Later",
                status: "error",
                duration: 3000,
                isClosable: true,
              })
            : message === 1
            ? toast({
                title: "Your Account Has Been Created Successfully",
                description: "",
                status: "success",
                duration: 3000,
                isClosable: true,
              })
            : message === 2
            ? toast({
                title: "Fields cant be empty",
                description: "Please fill all the fields",
                status: "warning",
                duration: 3000,
                isClosable: true,
              })
            : message === 3
            ? toast({
                title: "Passwords Dont Match",
                description: "",
                status: "warning",
                duration: 3000,
                isClosable: true,
              })
            : message === 4
            ? toast({
                title: "Username Already Exists",
                description: "",
                status: "error",
                duration: 3000,
                isClosable: true,
              })
            : ""}
        </form>
      </div>
    </div>
  );
}

export default Signup;
