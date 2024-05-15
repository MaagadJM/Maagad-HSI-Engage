import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

import HSI_Logo from "../../../../assets/HSI_Logo.png";

const ProjectLogin = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="h-screen w-full bg-cover bg-[url('/project_bg_img.jpg')]">

      <section data-aos="fade-left" className="h-full flex flex-col justify-center items-center bg-black/30 relative" >
        <header className=" text-2xl font-serif absolute top-10 left-4 xs:left-20">
          <Link
            to="/Maagad-HSI-Engage"
            className="flex items-center uppercase text-white font-sans"
          >
            <MdOutlineKeyboardArrowLeft className="text-2xl" />
            <p className="text-base xs:text-lg font-sans">
              Go Back To<span className={`font-bold`}> Engage</span>
            </p>
          </Link>
        </header>
        <div className="grid content-between place-items-center bg-white rounded-md h-[500px] xs:h-[530px] w-[22rem] xs:w-[23rem] p-6">
          <div className="w-[10rem] ">
            <img
              src={HSI_Logo}
              alt="HSI logo"
              className="w-full h-auto mt-2"
            />
          </div>

          <div className="">
            <p className="text-center font-semibold">
              Please enter your username and password to login
            </p>
          </div>

          <div className="p-5 ">
            <input type="text"
              placeholder="Username"
              className="indent-3 p-1 border-solid border-2 border-#D4D8D3-500 rounded-lg w-full leading-7 mt-[10px]"
            />

            <input type="password"
              placeholder="Password"
              className="indent-3 p-1 border-solid border-2 border-#D4D8D3-500 rounded-lg w-full leading-7 mt-[30px]"
            />

            <div className="flex justify-items-start gap-2 mt-[25px]">
              <input type="checkbox" name="keepMeSignedIn" id="" />
              <p className=" text-gray-500 text-sm xs:text-base">Keep Me Signed In</p>
            </div>
          </div>

          <div className="w-full pr-5 xs:mb-4">
            <button className="flex items-center justify-center ml-auto p-2 rounded-lg w-[90px] bg-[#9D7C17] font-semibold text-white"> Login </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ProjectLogin;
