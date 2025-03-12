import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <Logo width="120px" />
            <p className="mt-3 text-sm text-gray-400">
              © 2024 Blogify. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Account
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Help
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
