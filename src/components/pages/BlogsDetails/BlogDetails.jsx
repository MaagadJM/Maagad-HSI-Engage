import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import additionalBlogData from "./data";
import CircleBg from "../NewsAndBlogs/CIrcleBg";
import RHeader from "../../Header/RHeader";
import RFooter from "../../Footer/RFooter";

const BlogDetails = () => {
  const { id } = useParams();
  const details = additionalBlogData.find(data => data.id === parseInt(id));

  useEffect(() => {
    AOS.init();
  }, []);

  if (!details) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <section
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="grid  w-[68%] h-screen max-lg:my-10    max-lg:w-full max-lg:px-5 max-lg:h-auto"
      >
        <RHeader />
        <section className="flex relative flex-col justify-between  h-[550px] max-lg:h-auto ">
          <section className="flex gap-20 items-center mt-10  w-full     max-lg:pb-10  max-lg:flex-col-reverse relative ">
            <section className="absolute -left-52 top-1/2  ">
              <h1 className="font-semibold -rotate-90 uppercase tracking-widest">
                connect with us
              </h1>
            </section>
            <section className="absolute top-[-20px] right-[40%] 2xl:right-[41%] ">
              <CircleBg />
            </section>
            <section className="absolute bottom-[-20px]  right-[-50px] ">
              <CircleBg />
            </section>
            <section className="block w-[60%] max-lg:w-full 2xl:text-xl ">
              <h1 className="text-3xl 2xl:text-5xl font-semibold">
                {" "}
                {details.title}
              </h1>
              <h2 className="text-xl 2xl:text-3xl mb-5 text-[#b69d3f] font-bold">
                {details.subTitle}
              </h2>
              <span>
                Posted:
                <span className="text-[#b6a35b]"> {details.posted}</span>
              </span>
              <p className="mt-5"> {details.description}</p> <br />
              <p> {details.description}</p>
              <section className="flex mt-5 items-center gap-5">
                <img
                  src={details.userImage}
                  alt=""
                  className="h-14 w-14 rounded-full"
                />
                <span>
                  Posted by
                  <b className="font-bold text-[#b6a049]">
                    {" "}
                    {details.userName}
                  </b>
                </span>
              </section>
            </section>
            <section className="relative">
              <img
                src={details.src}
                alt=""
                className="h-[350px] rounded-xl w-[500px] 2xl:w-[650px] 2xl:h-[450px] object-cover"
              />
              <img
                src="/HSI_LOGO.png"
                alt=""
                className=" absolute h-24 w-30 bottom-[-50px] left-10"
              />
            </section>
          </section>
          <RFooter />
        </section>
      </section>
    </>
  );
};
export default BlogDetails;
