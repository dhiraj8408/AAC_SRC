import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

function Homepage(props) {
  return (
    <div>
      <Navbar {...props} />

      <div className="text flex flex-row">
        <div className="text hidden lg:block font-bold mt-16 mx-0">
          <p className="px-10 mx-10 mb-10 text-4xl  text-indigo-900">
            Embark On Celestial Journey
          </p>

          <p className="px-10 mx-10 text-4xl  mb-10 text-indigo-900">
            Space Talk Star Gazing
          </p>
          <p className="px-10 mx-10 text-4xl mb-10 text-fuchsia-700 underline">
            <Link to="/login">Explore More </Link>
          </p>
        </div>
        <div className="homeImage lg:w-2/3 m-auto">
          <img src="../home2.jpeg" alt="home graphic" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row border border-slate-50 mx-4 mt-3 mb-3">
        <div className="lg:w-1/2 w-6/7 m-auto">
          <div className="container  lg:px-10  p-6 shadow-lg rounded-lg  shadow-gray-300 text-gray-700">
            <p className="font-bold text-2xl text-center">About Us</p>

            <p className="mt-4">
              We are a group of individuals united by our love for astronomy and
              passion for exploring the universe. As a club, we organize a
              variety of events and activities that allow members to delve
              deeper into this fascinating field. From educational workshops and
              guest speaker sessions to stargazing sessions and telescope
              viewings, we offer opportunities for hands-on learning and
              personal growth.
              <br />
              <br /> Whether you're a seasoned astronomer or just starting to
              develop an interest in the stars, our club provides a welcoming
              and inclusive environment for all. Come join us and be a part of a
              community that is dedicated to advancing our understanding of the
              cosmos.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-6/7 m-auto md:place-self-end place-self-start">
          <img src="../../home5.jpg" alt="home graphic" />
        </div>
      </div>
      <div
        id="here"
        className="flex flex-col lg:flex-row border border-slate-50 mx-4 mt-3 mb-3"
      >
        <div className="lg:w-1/2 w-6/7 m-auto">
          <div className="container order-first md:order-last lg:px-10 p-6 shadow-lg rounded-lg  shadow-gray-300 text-gray-700">
            <p className="font-bold text-2xl text-center">
              Our Goal <span className="big">🎯</span>{" "}
            </p>
            <br />
            <p>
              Our goal at the Astronomy Club is to inspire and educate
              individuals about the wonders of the universe.
              <br /> We aim to:
              <ul>
                <li>
                  ➡️Promote a deeper understanding and appreciation of astronomy
                  through hands-on learning experiences
                </li>
                <li>
                  ➡️Provide access to the latest technology and knowledge in the
                  field of astronomy and aerospace.
                </li>{" "}
                <li>
                  ➡️Create a community of like-minded individuals who share a
                  passion for the cosmos
                </li>{" "}
                <li>
                  ➡️Encourage participation in astronomical research and
                  projects
                </li>
                <li>
                  ➡️Raise awareness of the beauty and significance of the night
                  sky
                </li>
              </ul>
              <br />
              Whether you're an amateur astronomer or a curious learner, we hope
              you find the information and resources on this site to be both
              informative and entertaining.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-6/7 m-auto order-last md:order-first">
          <img
            width="600px"
            className=""
            src="../../home4.jpg"
            alt="home graphic"
          />
        </div>
      </div>
      <div className="text-center">
        <Link to="/blogs">
          <Button className="m-3" variant="outline" colorScheme="linkedin">
            Blogs
          </Button>
        </Link>
        <Link to="/signup">
          <Button className="m-3" variant="outline" colorScheme="linkedin">
            <span className="">Get Started</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
