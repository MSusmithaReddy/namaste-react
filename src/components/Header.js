import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Header = () => {
  const [signInInfo, onSignInInfo] = useState("Login");

  const isOnline = useOnlineStatus();

  const onSignInInfoUpdate = () => {
    onSignInInfo(signInInfo == "Login" ? "Logout" : "Login");
  };
  return (
    <>
      {!isOnline
        ? <h2>You seems to be offline, Please check your network connection and try again</h2>
        : ""}
      <div className="flex items-center justify-between bg-pink-300">
        <div>
          <img className="w-32 h-32 border border-blue-500 rounded-2xl bg-blue-400 m-4" src={LOGO_URL} />
        </div>
        <div>
          <ul className="flex items-center mr-4">
          <li className='mr-10'>
              Online Status: {isOnline ? '🪀' : '🍎'}
            </li>
            <li className='mr-10'>
              <Link to="/" className='border border-blue-500 rounded-2xl hover:rounded-full p-3 w-40 bg-blue-400 text-zinc-50 flex justify-center'>Home</Link>
            </li>
            <li className='mr-10'>
              <Link to="/about" className='border border-blue-500 rounded-2xl hover:rounded-full p-3 w-40 bg-blue-400 text-zinc-50 flex justify-center'>About Us</Link>
            </li>
            <li className='mr-10'>
              <Link to="/contact" className='border border-blue-500 rounded-2xl hover:rounded-full p-3 w-40 bg-blue-400 text-zinc-50 flex justify-center'>Contact Us</Link>
            </li>
            <li className='mr-10'>
              <Link to="/cart" className='border border-blue-500 rounded-2xl hover:rounded-full p-3 w-40 bg-blue-400 text-zinc-50 flex justify-center'>Cart</Link>
            </li>
            <button onClick={onSignInInfoUpdate} className='border border-blue-500 rounded-2xl hover:rounded-full p-3 w-40 bg-blue-400 text-zinc-50 flex justify-center'>
              {signInInfo}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
