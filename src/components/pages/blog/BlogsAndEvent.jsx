import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import RHeader from "../../Header/RHeader";
import RFooter from "../../Footer/RFooter";
import AOS from "aos";
import "aos/dist/aos.css";
const BlogsAndEvent = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-out"
      className="grid content-between w-[68%]  max-lg:w-full max-lg:px-10  h-screen"
    >
      <RHeader />
      <section className="relative">
        <section className="absolute -left-60 top-60">
          <h1 className="font-medium -rotate-90 uppercase tracking-widest">
            view our vlogs and events
          </h1>
        </section>
        <section className="mt-10">
          <h1 className="uppercase text-lg  tracking-widest font-semibold">
            Blogs & <b className="text-[#9f8102]"> Events</b>
          </h1>
          <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 w-full mt-5 max-lg:h-auto">
            {data.map(item => {
              return (
                <Link key={item.id} to={`/Maagad-HSI-Engage/blog-details/${item.id}`}>
                  <section className="relative w-full text-white  h-[250px] 2xl:h-[400px]  cursor-pointer ">
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
            <RFooter />
          </section>
        </section>
      </section>
    </section>
  );
};

export default BlogsAndEvent;

const data = [
  {
    id: 1,
    src: "/image 1.jpg",
    content: "Blog Title ",
    title: "an inquiry",
    path: "/Maagad-HSI-Engage/blog-details",
  },
  {
    id: 2,
    src: "/image 2.jpg",
    content: "Blog Title ",
    title: "feedback",
    path: "/Maagad-HSI-Engage/blog-details",
  },
  {
    id: 3,
    src: "/image 3.jpg",
    content: "Blog Title ",
    title: "on my project",
    path: "/Maagad-HSI-Engage/blog-details",
  },
  {
    id: 4,
    src: "/image 4.jpg",
    content: "Blog Title ",
    title: "highly succeed",
    path: "/Maagad-HSI-Engage/blog-details",
  },
  {
    id: 5,
    src: "/image 5.jpg",
    content: "Blog Title ",
    title: "highly succeed",
    path: "/Maagad-HSI-Engage/blog-details",
  },
  {
    id: 6,
    src: "/image 6.jpg",
    content: "Blog Title ",
    title: "highly succeed",
    path: "/Maagad-HSI-Engage/blog-details",
  },
];
