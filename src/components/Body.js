
import { Link } from "react-router-dom";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AddressCard from "./AddressCard";
import {
  RectangleContainer,
  Rectangle,
  Layer1,
  Layer2,
  Watch,
  RectangleSection,
} from "./index.styl";
import Profile from "../../public/images/profile.png";
import IconBackArrow from "../../public/images/icon_back_arrow.png";
import SmartWatch from "../../public/images/watch.png";

const Body = () => {
  return (
    <div>
      <div className="m-5">
        <div className="flex items-center justify-between">
          <div
            className="bg-gray-100 w-[60px] h-[60px] rounded-full relative"
            style={{ border: "1px solid black" }}
          >
            <img
              className="w-7 h-7 absolute top-3.5 left-3.5"
              src={IconBackArrow}
            />
          </div>
          <img className="w-[60px] h-[60px] rounded-full" style={{ border: "1px solid black" }} src={Profile} />
        </div>
        <h4 className="text-[#2F2F2F] font-bold	text-[36px] mt-3 leading-tight mb-4">
          Your <br /> Fitness Tracker
        </h4>
        <ul className="flex items-center justify-between mt-4">
          <li className="mr-2">
            <Link className="text-[14px] border border-[#FF6020] rounded-full p-3 w-40 bg-[#FF6020] text-white flex justify-center font-semibold">
              Connected Devices
            </Link>
          </li>
          <li>
            <Link className="text-[14px] border border-gray-100 rounded-full p-3 w-40 bg-gray-100 text-gray-400 flex justify-center font-semibold">
              Statistics
            </Link>
          </li>
        </ul>
        <RectangleContainer>
          {/* Base Rectangle */}
          <Rectangle>
            {/* First Layer */}
            <Layer1 />
            {/* Second Layer */}
            <Layer2 />
            <RectangleSection>
              <div className="flex justify-between flex-col h-[100%] w-[45%]">
                <div>
                  <div className="text-[13px] text-[#FF8250]">Smart Watch</div>
                  <div className="text-[26px] font-bold">Fire Boltt</div>
                </div>
                <div className="text-[12px] text-gray-100">
                  Scan the device <br/>QR to connect
                </div>
                <Link className="text-[15px] border border-[#FF6020] rounded-full p-3 w-20 bg-[#FF6020] text-white flex justify-center">
                  Scan
                </Link>
              </div>
              <Watch>
                <img width="260px" height="260px" src={SmartWatch} />
              </Watch>
            </RectangleSection>
          </Rectangle>
        </RectangleContainer>
        <div className="flex items-center justify-between mt-5 mb-5">
          <div className="bg-[#2F2F2F] rounded-3xl w-[200px] p-[20px]">
            <CircularProgressbarWithChildren value={36}>
              <div className="text-bold text-[20px] text-white">5,233</div>
              <div className="text-[#FF8250] text-[10px]">Steps</div>
            </CircularProgressbarWithChildren>
          </div>
          <div>
            <div className="bg-[#FFF4EF] rounded-full w-[180px] m-2 p-[10px] text-center mb-4">
              <div className="text-[#FF8250] text-[13px] font-semibold">
                Calories
              </div>
              <div className="font-extrabold text-[20px]">1200 kcal</div>
            </div>
            <div className="bg-[#FFF4EF] rounded-full w-[180px] m-2 p-[10px] text-center">
              <div className="text-[#FF8250] text-[13px] font-semibold">
                Water
              </div>
              <div className="font-extrabold text-[20px]">1200 kcal</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FF6020] rounded-tl-[40px] rounded-tr-[40px] p-[15px]">
        <div className="text-[20px] font-semibold text-white pt-5 pb-2">
          Add Details
        </div>
        <AddressCard />
        <Link className="text-[20px] font-extrabold border border-black rounded-full p-3 bg-black text-white flex justify-center mb-[20px]">
          Save Details
        </Link>
      </div>
    </div>
  );
};

export default Body;
