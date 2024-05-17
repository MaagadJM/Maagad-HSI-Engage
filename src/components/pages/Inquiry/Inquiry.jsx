import { useEffect, useState } from "react";
import RFooter from "../../Footer/RFooter";
import RHeader from "../../Header/RHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import InquiryForm from "./Form/InquiryForm";

const Inquiry = () => {

  const [services, setServices] = useState(false)

  useEffect(() => {
    AOS.init();
  }, []);

  const handleServices = () => {
    setServices(!services)
  }

  return (
    <section data-aos="fade-left" className={`grid content-between mx-4 w-[90%] lg:w-[70%] ${!services && "h-screen"}`}>
      <RHeader textColor={`${services && "text-[#BE9D40]"}`} />
      {
        !services ?
          (
            <section className="lg:grid lg:grid-cols-2 max-lg:flex max-lg:flex-col-reverse my-auto">
              <section className="flex relative">
                <section className="absolute -left-32 top-1/2">
                  <h1 className="font-semibold -rotate-90 tracking-widest">TICKETING</h1>
                </section>
                <section className="flex items-center">
                  <section className="flex flex-col">
                    <section className="space-y-4 mt-6">
                      <p className="text-base xl:text-lg">
                        Need something? Interested for a
                        <span className="block">product demo?</span>
                      </p>
                      <h1 className="text-6xl xs:text-[5rem] sm:text-[5.5rem] lg:text-6xl xl:text-7xl tracking-wide uppercase leading-none">
                        Give us an
                        <span className="text-yellow-500 block font-bold">Inquiry</span>
                      </h1>
                    </section>
                    <button onClick={handleServices} className="bg-[#FBEFF0] text-base 2xl:text-xl text-[#A8861F] rounded-lg py-2 px-6 mt-6 lg:mt-12 md:mx-0 w-fit">
                      Contact Us
                    </button>
                  </section>
                </section>
              </section>

              <section className=" flex items-center justify-center">
                <section className="w-[95%] md:w-[80%] 2xl:w-[40rem] h-auto ">
                  <img src="/Maagad-HSI-Engage/img-circle.PNG" alt="presentation" className="w-full h-full rounded-xl" />
                </section>
              </section>
            </section>
          )

          :
          <InquiryForm />
      }
      <RFooter />
    </section>
  );
}

export default Inquiry;