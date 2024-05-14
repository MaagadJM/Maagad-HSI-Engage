import { useEffect } from "react";
import { Link } from "react-router-dom";
import RFooter from "../../Footer/RFooter";
import AOS from "aos";
import "aos/dist/aos.css";
import RHeader from "../../Header/RHeader";

const NewsAndBlog = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        className={`grid content-between w-[70%] max-lg:w-full max-lg:px-5 lg:h-screen `}
      >
        <RHeader />
        <section className="lg:grid lg:grid-cols-2 max-lg:flex  max-lg:flex-col-reverse my-auto h-auto max-lg:pt-10">
          <section className="flex relative">
            <section className="absolute -left-52 top-1/2">
              <h1 className="font-semibold -rotate-90 uppercase tracking-widest">
                News/blogs
              </h1>
            </section>
            <section className="flex items-center max-lg:w-full">
              <section className="flex flex-col">
                <section className="space-y-4 mt-6 text-left">
                  <p className="text-base xl:text-lg">
                    Want to know more about our service?
                    <span className="block">and view our own staff blogs?</span>
                  </p>
                  <h1 className="text-6xl xs:text-[4rem] sm:text-[5rem] lg:text-6xl xl:text-7xl tracking-wide uppercase leading-none">
                    View our
                    <span className="text-yellow-500 block font-bold">
                      NEWS, BLOGS & PRODUCTS
                    </span>
                  </h1>
                </section>
                <section className="flex flex-col text-sm gap-2 justify-center mt-4 w-full">
                  <Link
                    to="/blogs"
                    className="bg-[#f8ebebb0] hover:bg-[#eec511] hover:text-white w-fit 2xl:w-[300px] 2xl:h-20 2xl:text-2xl 2xl:flex 2xl:items-center 2xl:justify-center py-3 px-6 rounded-lg text-[#a79431] font-semibold"
                  >
                    View News & Blogs
                  </Link>
                  <Link
                    to="/blogs"
                    className="bg-[#f8ebebb0] hover:bg-[#eec511]  hover:text-white w-fit py-3 2xl:w-[300px] 2xl:h-20 2xl:text-2xl 2xl:flex 2xl:items-center 2xl:justify-center  px-6 rounded-lg text-[#a79431] font-semibold"
                  >
                    View Our Products
                  </Link>
                </section>
              </section>
            </section>
          </section>

          <section className=" flex items-center justify-center ">
            <section className="w-[40rem] 2xl:w-[40rem] h-auto max-lg:w-full ">
              <img
                src="/img-circle.PNG"
                alt="presentation"
                className="w-full h-full rounded-xl"
              />
            </section>
          </section>
        </section>
        <RFooter />
      </section>
    </>
  );
};

export default NewsAndBlog;
