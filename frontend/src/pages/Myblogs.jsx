import React, { useState, useEffect } from "react";
import Dashblogcard from "../components/Dashblogcard";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
function Myblogs(props) {
  const [data, setData] = useState(null);
  const [callCount, setCallCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (!props.isLogin) {
      navigate("/login");
    }
    if (callCount === 0) {
      axios
        .get("http://localhost:5000/user/myblogs", {
          params: { userid: props.user._id, token: props.token },
        })
        .then((res) => {
          setData(() => {
            let temp = res.data.data;
            temp.reverse();
            return temp;
          });
          setCallCount(1);
        });
    }
  });
  return (
    <div className="">
      <Navbar {...props} />

      <h1 className="w-3/4 m-auto rounded-3 p-3 text-center display-6 mt-3 mb-5  bg-slate-200 text-2xl">
        My Blogs
      </h1>
      {data === null ? (
        <div className="text-center">
          <h1 className="text-center text-xl mt-32 mb-32">
            <Spinner className="m-4" size="xl" />
            <br />
            <span className="">Loading . . . .</span>
          </h1>
        </div>
      ) : data.length === 0 ? (
        <div className="text-center">
          <h1 className="text-center text-xl mt-32 mb-32">
            <span className="">NO RECORDS FOUND</span>
          </h1>
        </div>
      ) : (
        <div className=" md:p-5 d-block  flex-column justify-content-center  flex-wrap ">
          {data.map((blog, index) => {
            return (
              <div key={index} className="m-1">
                <Dashblogcard token={props.token} data={blog} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Myblogs;
