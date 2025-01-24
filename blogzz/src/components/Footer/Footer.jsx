import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../components/index.js";

function Footer() {
  return (
    <footer className="rounded-lg shadow bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Logo width="256px" />
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <Link to="/">BLLOGZZ™</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
