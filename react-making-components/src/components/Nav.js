import React from "react";

function Nav() {
  return (
    <div>
      <nav className="flex fle-row  justify-between items-center bg-gray-800 text-white p-4  shadow-md">
        <div className="flex items-center space-x-4 hover:text-blue-300">
          <a> Suraj Upadhyay</a>
        </div>

        <div>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="hover:text-gray-400 active:scale-95 transition-transform duration-200 ease-in-out active:bg-gray-700 p-2 rounded"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 active:scale-95 transition-transform duration-200 ease-in-out active:bg-gray-700 p-2 rounded"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 active:scale-95 transition-transform duration-200 ease-in-out active:bg-gray-700 p-2 rounded"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 active:scale-95 transition-transform duration-200 ease-in-out active:bg-gray-700 p-2 rounded"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
