import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Home = () => {
  return (
    <div className=" h-[100vh] flex items-center">
      <div className=" px-4 md:px-6 lg:px-[10%]">
        <h1 className="text-5xl font-extrabold   ">
          Hello, I&apos;m Ye Bhone Myat !
        </h1>

        <p className="text-4xl sm:pr-10 my-5 ">
          I am a front end web developer.I am a front end web developer.I am a
          front end web developer.I am a front end web developer.
        </p>
        <div className=" flex gap-3">
          <a
            href="https://github.com/yebone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className=" text-4xl cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/ye-bhone-myat-9603421b3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className=" text-4xl cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
