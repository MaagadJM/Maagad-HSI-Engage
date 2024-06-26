import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    src: "/Maagad-HSI-Engage/inquiry_img.jpg",
    content: "I want to make ",
    title: "an inquiry",
    path: "/Maagad-HSI-Engage/inquiry",
  },
  {
    id: 2,
    src: "/Maagad-HSI-Engage/feeedback.png",
    content: "I want to give ",
    title: "feedback",
    path: "/Maagad-HSI-Engage/feedback",
  },
  {
    id: 3,
    src: "/Maagad-HSI-Engage/project_marketing.jpg",
    content: "I want to check ",
    title: "on my project",
    path: "/Maagad-HSI-Engage/project",
  },
  {
    id: 4,
    src: "/Maagad-HSI-Engage/typewriter.jpg",
    content: "I want to know more about ",
    title: "highly succeed",
    path: "/Maagad-HSI-Engage/about",
  },
];
const MainContent = () => {
  return (
    <>
      <section className="flex flex-col space-y-6  h-auto relative">
        <section className="absolute -left-44 top-1/2">
          <span className="absolute text-xl -rotate-90 uppercase tracking-widest text-nowrap text-gray-400">
            Connect with us
          </span>
        </section>
        <h1 className="text-xl text-center text-gray-600">
          HOW CAN WE BE OF <b className="text-[#e4b61a]"> ASSISTANCE? </b>
        </h1>
        <section className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 lg:h-[400px]  2xl:h-[550px]">
          {data.map(item => {
            return (
              <Link key={item.id} to={item.path}>
                <section className="relative w-full text-white  2xl:h-[32rem] h-[23rem] cursor-pointer ">
                  <img
                    src={item.src}
                    alt=""
                    className="object-cover rounded-xl h-full w-full brightness-50 hover:brightness-100 transition duration-500 ease-in-out"
                  />
                  <section className="bottom-5 absolute  uppercase right-0 left-0 text-center text-xl">
                    <h1>{item.content}</h1>
                    <h1>
                      <b>{item.title} </b>
                    </h1>
                  </section>
                </section>
              </Link>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default MainContent;
