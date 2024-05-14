import RFooter from "../../../Footer/RFooter";
import RHeader from "../../../Header/RHeader";
import { FaRegStar } from "react-icons/fa";
import { products } from "../data/products";
import Form from "./form-elements/Form";

const SurveyForm = () => {

  const star = Array.from({ length: 5 }, (index) => {
    return <FaRegStar key={index} className="text-3xl mlg:text-4xl text-gray-500" />
  });

  return (
    // className="grid content-between w-[68%]"
    // data-aos="fade-left"
    <section data-aos="fade-left" className="grid content-between ">
      {/* <RHeader textColor="text-[#BE9D40]" /> */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-14 relative">
        <>
          <section className="absolute -left-28 top-60">
            <h1 className="font-medium -rotate-90 uppercase tracking-widest text-gray-400">Take The Survey</h1>
          </section>
          <section className="flex">
            <section className="w-full">
              <h1 className="text-base mlg:text-xl font-semibold text-[#333]">
                POST SERVICE
                <span className="font-bold text-[#BE9D40]"> SURVEY</span>
              </h1>
              <p className="text-gray-600 text-base mlg:text-lg mt-6">
                <span className="text-red-500 font-semibold">* </span>
                Required
              </p>

              <Form star={star} />

            </section>
          </section>
        </>

        <section className=" flex flex-col  gap-x-6 space-y-6 mt-8 lg:mt-0">
          <>
            <h1 className="text-base mlg:text-xl font-semibold text-[#333]">
              OUR
              <span className="font-bold text-[#BE9D40]"> PRODUCTS</span>
            </h1>
          </>
          <section className="mxl:w-[40rem] flex flex-wrap gap-y-6 mmxl:gap-x-6">
            {products.map((product) => (
              <div key={product.id} className="w-[7.5rem] mmxl:w-32 mxl:w-36 h-auto rounded-2xl overflow-hidden mx-auto" >
                <img
                  src={product.imagePath}
                  alt="products"
                  className="w-auto h-auto"
                />
              </div>
            ))}
          </section>
        </section>
      </section >
      {/* <RFooter /> */}
    </section>
  );
}

export default SurveyForm;