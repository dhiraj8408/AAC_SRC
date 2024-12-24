import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

function Contactus(props) {
  const [message, setMessage] = useState(-1);
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const toast = useToast();
  useEffect(() => {
    setMessage(-1);
  }, [message]);
  function handleChange(e) {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "text":
        setText(e.target.value);
        break;
      default:
        break;
    }
  }
  function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("text").value = "";
    setName("");
    setEmail("");
    setText("");
  }
  function handleSubmit() {
    if (name === "" || email === "" || text === "") {
      setMessage(2);
      return;
    }
    setSubmit(true);
    axios
      .post("http://localhost:5000/contact", null, {
        params: {
          name: name,
          email: email,
          text: text,
        },
      })
      .then((res) => {
        setMessage(res.data.message);
        clearInputs();
        setSubmit(false);
      });
  }
  return (
    <div>
      <Navbar {...props} />
      <div className="container lg:my-20 px-6 mx-auto w-full lg:w-3/4  rounded-5p-5 ">
        <section className="mb-30 text-gray-800">
          <div className="flex flex-wrap">
            <div className="grow-0 shrink-0 basis-auto  md:mb-0 w-full md:w-6/12 px-3 lg:px-6 ">
              <img
                className="w-full m-auto xl"
                src="../../contactus.jpeg"
                alt="Contact Graphic"
              />
            </div>
            <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
              <form className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  Contact us
                </h2>
                <div className="form-group mb-6">
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control block 
              w-full
              px-3
              py-1.5
              text-sm
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded-xl
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    onChange={handleChange}
                    type="email"
                    className="form-control block
              w-full
              px-3
              py-1.5
              text-sm
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded-xl
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-700 focus:outline-none"
                    id="email"
                    placeholder="Your Email Address"
                  />
                </div>
                <div className="form-group mb-6">
                  <textarea
                    onChange={handleChange}
                    className="
              htmlForm-control
              block
              w-full
              px-3
              py-1.5
              text-sm
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded-xl
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-700 focus:outline-none
            "
                    id="text"
                    rows="7"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="form-group htmlForm-check text-center mb-6"></div>
                <Button
                  className="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-sm
            leading-tight
            uppercase
            rounded-xl
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
                  isLoading={submit}
                  onClick={handleSubmit}
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>
      {message === 0
        ? toast({
            title: "Server Error",
            description: "Please Try Again",
            status: "error",
            duration: 3000,
            isClosable: true,
          })
        : message === 1
        ? toast({
            title: "Sent Successfully",
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
        : ""}
    </div>
  );
}

export default Contactus;
