import home from "../assets/fihome.svg";
import activity from "../assets/fiactivity.svg";
import aperture from "../assets/fiaperture.svg";
import group1 from "../assets/group1.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 w-full bg-darkslategray-300 shadow-lg">
      <div className="flex items-center justify-between mx-auto p-4 gap-4">
        <Link
          to="/"
          className="flex items-center justify-center basis-1/3 rounded-xl hover:bg-deepskyblue focus:ring-2 focus:bg-deepskyblue cursor-pointer [border:none] p-0 bg-steelblue-200 h-[128px]"
          id="home"
        >
          <img className="" src={home} alt="Home" />
        </Link>
        <Link
          to="/controls"
          className="flex items-center justify-center basis-1/3 rounded-xl hover:bg-deepskyblue focus:ring-2 focus:bg-deepskyblue  cursor-pointer [border:none] p-0 bg-steelblue-200  h-[128px]"
          id="controls"
        >
          <img src={activity} alt="Controls" />
        </Link>
        <Link
          to="/science"
          className="flex items-center justify-center basis-1/3 rounded-xl hover:bg-deepskyblue focus:ring-2 focus:bg-deepskyblue  cursor-pointer [border:none] p-0 bg-steelblue-200  h-[128px]"
          id="science"
        >
          <img src={group1} alt="Science" />
        </Link>
        {/* <Link
          to="/panorama"
          className="flex items-center justify-center basis-1/4 rounded-xl hover:bg-deepskyblue focus:ring-2 focus:bg-deepskyblue cursor-pointer [border:none] p-0 bg-steelblue-200  h-[128px]"
          id="panorama"
        >
          <img src={aperture} alt="Home" />
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
