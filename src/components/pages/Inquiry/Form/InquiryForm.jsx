import RFooter from "../../../Footer/RFooter";
import RHeader from "../../../Header/RHeader";
import { services } from "../data/data";
import Fieldset from './form-elements/Fieldset'
import Input from "./form-elements/Input";
import Label from "./form-elements/Label";

const InquiryForm = () => {

  return (
    <section data-aos="fade-left" className="grid content-between ">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8 relative">
        <>
          <section className="absolute -left-28 top-52">
            <h1 className="font-medium -rotate-90 uppercase tracking-widest text-gray-300">Inquiry</h1>
          </section>
          <section className="flex">
            <section className="w-full">
              <h1 className="text-base mlg:text-lg font-semibold text-[#333] uppercase">
                Service
                <span className="font-bold text-[#BE9D40]"> Inquiry</span>
              </h1>
              <p className="text-gray-600 text-base mlg:text-lg mt-6">
                <span className="text-red-500 font-semibold">* </span>
                Required
              </p>

              <form className="mt-6 flex flex-col space-y-6">
                <Fieldset>
                  <Label>
                    1. Enter Your Name
                  </Label>
                  <Input placeholder="Your name" />
                </Fieldset>
                <Fieldset>
                  <Label>
                    2. Enter Your Email Address
                  </Label>
                  <Input placeholder="Your Email Address" />
                </Fieldset>
                <Fieldset>
                  <Label>
                    3. Enter Your Contact Number
                  </Label>
                  <Input placeholder="Your Contact Number" />
                </Fieldset>
                <Fieldset>
                  <Label>
                    4. I&apos;m Sending An Inquiry For:
                  </Label>
                  <select
                    className="max-w-[30rem] text-gray-400 bg-[#EAEAEC] rounded-lg border border-gray-300 outline-none px-4 py-2"
                  >
                    <option value="" className="text-gray-300" selected disabled hidden>Service</option>
                    <option value="marketing">Marketing</option>
                    <option value="development">Development</option>
                    <option value="design">Design</option>
                    <option value="migration">Migration</option>
                    <option value="implementation">Implementation</option>
                  </select>
                </Fieldset>
                <Fieldset>
                  <Label>
                    5. Enter Inquiry Message
                  </Label>
                  <textarea
                    placeholder="Your Message Here"
                    className="resize-none max-w-[30rem] min-h-[5rem] overflow-y-hidden bg-[#EAEAEC] rounded-lg border border-gray-300 outline-none px-4 py-2"
                  />
                </Fieldset>

                <button
                  onClick={(e) => e.preventDefault()}
                  className="bg-[#BE9D40] text-white text-lg rounded-lg w-28 h-10 "
                >
                  Submit
                </button>
              </form>
            </section>
          </section>
        </>

        <section className=" flex flex-col gap-x-6 space-y-6 mt-8 lg:mt-0">
          <>
            <h1 className="text-base mlg:text-lg font-semibold text-[#333] uppercase">
              Our
              <span className="font-bold text-[#BE9D40]"> Services</span>
            </h1>
          </>
          <section className="flex flex-col gap-4">
            {services.map((service) => (
              <div key={service.id} className="w-[95%] mmxl:max-w-[28rem] h-auto rounded-lg overflow-hidden" >
                <img
                  src={service.imagePath}
                  alt="services"
                  className="w-full h-auto"
                />
              </div>
            ))}
          </section>
        </section>
      </section >
    </section>
  );
}

export default InquiryForm;