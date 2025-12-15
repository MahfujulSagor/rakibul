import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="w-full border border-base-300 rounded-box px-4 py-8">
      <div className="grid grid-cols-3 items-center w-full px-4">
        <div className="justify-self-start">
          <h2 className="text-2xl font-bold">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-red-600">
              <Link to={'/'}>Habit Tracker</Link>
            </span>
          </h2>
        </div>
        <p className="text-sm text-gray-600 justify-self-center">
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </p>
        <div className="justify-self-end">
          <div className="text-sm flex space-x-8 text-gray-600">
            <div className="flex flex-col">
              <span className="hover:text-black hover:underline cursor-pointer">
                Email
              </span>
              <span className="hover:text-black hover:underline cursor-pointer">
                Phone
              </span>
            </div>
            <div className="flex flex-col">
              <span className="hover:text-black hover:underline cursor-pointer">
                Terms & Conditions
              </span>
              <span className="hover:text-black hover:underline cursor-pointer">
                Privacy Policy
              </span>
            </div>
            <div className="flex flex-col">
              <span className="hover:text-black hover:underline cursor-pointer">
                Github
              </span>
              <span className="hover:text-black hover:underline cursor-pointer">
                LinkedIn
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
