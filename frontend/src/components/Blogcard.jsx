import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { Badge } from "@chakra-ui/react";
const Blogcard = (props) => {
  let width = window.innerWidth;
  let address = "/showblog/" + props.data._id;
  const [submit, setSubmit] = useState(false);
  const [usermessage, setUserMessage] = useState("");
  let newBadge = false;
  let b = new Date();
  b = b.getTime();
  let a = new Date(props.data.date);
  a = a.getTime();
  newBadge = Math.floor((b - a) / 86400000) > 15 ? false : true;
  function handleApprove() {
    setSubmit(true);
    axios
      .post("http://localhost:5000/admin/approve",{
          id: props.data._id,
          message: usermessage,
          token: props.token,
      })
      .then((res) => {
        props.setData(res.data.data);
        props.setMessage(res.data.message);
        setSubmit(false);
        inputClear();
      });
  }
  function handleReject() {
    setSubmit(true);
    axios
      .post("http://localhost:5000/admin/reject", {
          id: props.data._id,
          message: usermessage,
          token: props.token,
      })
      .then((res) => {
        props.setData(res.data.data);
        props.setMessage(res.data.message);
        setSubmit(false);
        inputClear();
      });
  }
  function handleChange(e) {
    switch (e.target.id) {
      case "usermessage":
        setUserMessage(e.target.value);
        break;
      default:
        break;
    }
  }
  function handleDelete() {
    setSubmit(true);
    axios
      .post("http://localhost:5000/admin/delete", {
          id: props.data._id,
          token: props.token,
      })
      .then((res) => {
        props.setData(res.data.data);
        props.setMessage(res.data.message);
        setSubmit(false);
      });
  }
  function inputClear() {
    document.getElementById("usermessage").value = "";
    setUserMessage("");
  }
  return (
    <div className="flex justify-center  w-full">
      <div className="transition ease-in-out hover:scale-105 delay-250 w-11/12 md:w-3/4 rounded-md p-5 px-6 mb-5 bg-white shadow-lg hover:shadow-2xl hover:shadow-slate-300">
        <h5 className="mt-1 text-2xl mb-1 font-bold tracking-tight text-[#241e1e]">
          {props.data.title}{" "}
          {newBadge ? (
            <Badge className="px-3" colorScheme="green">
              NEW
            </Badge>
          ) : (
            ""
          )}
        </h5>

        <p className="mb-2 text-sm  text-blue-600">
          {props.data.name}, {props.data.date} {props.data.time}
        </p>

        <p className="mt-4 font-normal text-[#241e1e]">
          {width > 800
            ? props.data.blog.slice(0, 700)
            : props.data.blog.slice(0, 200)}
          .........
        </p>
        <div className="flex flex-col md:flex-row justify-end ">
          <Link to={address}>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="blue"
              className="mt-2 w-full"
              variant="solid"
            >
              Read More
            </Button>
          </Link>
          {!props.data.isApproved ? (
            <>
              <Button
                colorScheme="green"
                variant="solid"
                className="mt-2 md:mx-2"
                isLoading={submit}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Approve
              </Button>
              <Button
                colorScheme="yellow"
                className="mt-2 md:mx-2"
                variant="solid"
                isLoading={submit}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Reject
              </Button>
              <Button
                colorScheme="red"
                className="mt-2 md:mx-2"
                variant="solid"
                isLoading={submit}
                onClick={handleDelete}
              >
                Delete
              </Button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* Modal for message in Accept blog and reject blog */}

      <div
        className="modal fade text-black"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Approve / Reject with a message
              </h1>
            </div>
            <div className="modal-body">
              <label for="usermessage" className="block text-sm  text-gray-800">
                Message for User <span className="text-red-500">*</span>
              </label>
              <input
                id="usermessage"
                onChange={handleChange}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:ring-stone-800 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
            <div className="modal-footer">
              <Button onClick={handleApprove} colorScheme="green" className="">
                Approve
              </Button>
              <Button onClick={handleReject} colorScheme="red" className="">
                Reject
              </Button>
              <Button colorScheme="gray" data-bs-dismiss="modal">
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
