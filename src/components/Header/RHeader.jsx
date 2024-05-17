import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const RHeader = ({ textColor = "text-black" }) => {
  const navigate = useNavigate();

  return (
    <header className="  text-2xl  flex items-center mt-14 w-[98%]  font-serif justify-between">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center uppercase "
      >
        <MdOutlineKeyboardArrowLeft className="text-2xl mt-0.5" />
        <p className="text-lg font-sans">
          Go <span className={`font-bold ${textColor}`}>Back</span>
        </p>
      </button>

      <section className=" flex gap-7 cursor-pointer text-gray-600">
        <a href="https://www.facebook.com/Highly.Succeed.Inc" target="_blank">
          <IoLogoFacebook />
        </a>
        <a href="https://twitter.com/highlysucceed?lang=en" target="_blank">
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/highlysucceed/?hl=en"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/highlysucceed?originalSubdomain=ph"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
      </section>
    </header>
  );
};

export default RHeader;
