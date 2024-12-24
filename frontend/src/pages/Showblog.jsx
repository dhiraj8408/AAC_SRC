import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Skeleton } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Showblog(props) {
  const { id } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    if (data === "") {
      axios
        .get("http://localhost:5000/blog/getData", {
          params: {
            id: id,
          },
        })
        .then((res) => {
          setData(res.data[0]);
        });
    }
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-bg">
      <Navbar {...props} />
      {data === "" ? (
        <div className="w-3/4 m-auto">
          <br />
          <Skeleton height="90px" />
          <br />
          <Skeleton height="90px" />
          <br />
          <Skeleton height="90px" />
          <br />
          <Skeleton height="90px" />
          <br />
          <Skeleton height="90px" />
        </div>
      ) : (
        <div className="w-11/12 md:w-3/4 bg-slate-50 shadow-2xl border m-auto p-5 rounded-2 mt-5">
          <div className="flex">
            <p className="font-bold text-2xl md:text-4xl">{data.title} </p>
          </div>
          <div className="mt-1 text-lg">
            <p className="">
              By <span className="text-blue-500">{data.name}</span>
            </p>
            <p className="d-inline ">
              {" "}
              {data.date} at {data.time}
            </p>
          </div>
          <hr className="bg-gradient-to-r from-blue-900 to-blue-900 h-1 mt-4" />
          <div className="mt-5 text-lg whitespace-pre-line">{data.blog}</div>
          <div className="text-center mt-6 bg-slate-200 p-4 text-2xl rounded">
            {" "}
            THE END
          </div>
        </div>
      )}
    </div>
  );
}

export default Showblog;
