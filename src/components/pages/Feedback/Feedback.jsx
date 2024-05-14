import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RFooter from "../../Footer/RFooter";
import RHeader from "../../Header/RHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import SurveyForm from "./Form/SurveyForm";

const Feedback = () => {

  const [survey, setSurvey] = useState(false)

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSurvey = () => {
    setSurvey(!survey)
  }

  return (
    // className="grid content-between w-[68%]"
    <section data-aos="fade-left" className={`grid content-between mx-4 w-[90%] lg:w-[70%] ${!survey && "h-screen"}`}>
      <RHeader textColor={`${survey && "text-[#BE9D40]"}`} />
      {
        !survey ?
          (
            <section className="lg:grid lg:grid-cols-2 max-lg:flex max-lg:flex-col-reverse my-auto h-auto max-lg:pt-10">
              <section className="flex relative">
                <section className="absolute -left-40 top-1/2">
                  <h1 className="font-semibold -rotate-90 uppercase tracking-widest">Post Service Survey</h1>
                </section>
                <section className="flex items-center ">
                  <section className="flex flex-col">
                    <section className="space-y-4 mt-6">
                      <p className="text-base xl:text-lg">
                        How is our service? Need to clarify something
                        <span className="block">or give your feedback?</span>
                      </p>
                      <h1 className="text-6xl xs:text-[5rem] sm:text-[5.5rem] lg:text-6xl xl:text-7xl tracking-wide uppercase leading-none">
                        Give us your
                        <span className="text-yellow-500 block font-bold">Thoughts</span>
                      </h1>
                    </section>
                    <button onClick={handleSurvey} className="bg-[#FBEFF0] text-base 2xl:text-xl text-[#A8861F] rounded-lg py-2 px-6 mt-6 lg:mt-12 md:mx-0 w-fit">
                      Take The Survey
                    </button>
                  </section>
                </section>
              </section>

              <section className="flex items-center justify-center">
                <section className="w-[95%] md:w-[80%] 2xl:w-[40rem] h-auto ">
                  <img src="/img-circle.PNG" alt="presentation" className="w-full h-full rounded-xl" />
                </section>
              </section>
            </section>
          )

          :
          <SurveyForm />
      }
      <RFooter />
    </section>
  );
}

export default Feedback;