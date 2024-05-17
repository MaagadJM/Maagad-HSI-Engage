import { useEffect } from "react";
import RFooter from "../../Footer/RFooter";
import RHeader from "../../Header/RHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section data-aos="fade-left" className="grid content-between mx-4 w-[90%] lg:w-[70%] h-screen">
      <RHeader />

      {/* <div className="absolute inset-0 bg-black bg-cover bg-center opacity-70">
        <img src="../../../../public/project_bg_img.jpg" alt="" className="w-full h-full object-cover" />
      </div> */}
      <section className="lg:grid lg:grid-cols-2 max-lg:flex max-lg:flex-col-reverse my-auto h-auto">
        <section className="flex relative">
          <section className="absolute -left-32 top-1/2">
            <h1 className="font-semibold -rotate-90 uppercase tracking-widest">CRM Portal</h1>
          </section>
          <section className="flex items-center">
            <section className="flex flex-col">
              <section className="space-y-6 mt-6">
                <p className="text-base xl:text-lg">
                  Let us manage your brand together,
                  <span className="block">stay connected with us...</span>
                </p>
                <h1 className="text-5xl xs:text-6xl sm:text-7xl lg:text-5xl xl:text-5xl mmxl:text-6xl mxl:text-7xl tracking-wide uppercase leading-none">
                  Access our
                  <span className="text-yellow-500 block font-bold">Management</span>
                  <span className="text-yellow-500 block font-bold">System</span>
                </h1>
              </section>
              <Link to="/Maagad-HSI-Engage/login" className="bg-[#FBEFF0] text-base 2xl:text-xl text-[#A8861F] rounded-lg py-2 px-6 mt-6 lg:mt-12 md:mx-0 w-fit">
                View System
              </Link>
            </section>
          </section>
        </section>

        <section className="flex items-center justify-center">
          <section className="w-[90%] md:w-[80%] 2xl:w-[40rem] h-auto ">
            <img src="/Maagad-HSI-Engage/img-circle.PNG" alt="presentation" className="w-full h-full rounded-xl" />
          </section>
        </section>
      </section>
      <RFooter />
    </section>
  );
}

export default Project;
