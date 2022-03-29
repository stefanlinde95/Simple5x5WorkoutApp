import React from "react";
import { Link } from "react-router-dom";
import faq from "../icons/faq.svg";
import guides from "../icons/guides.svg";
import videos from "../icons/videos.svg";

const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0">
      <div className="navbar container mx-auto">
        <nav className="nav">
          <ul className="flex text-white">
            <li>
              <Link to="/guides" className="flex">
                <img src={guides} alt="guides" width={25} className="mr-2" />
                Guide
              </Link>
            </li>
            <li>
              <Link to="/videos" className="flex">
                <img src={videos} alt="Videos" width={25} className="mr-2" />
                Videos
              </Link>
            </li>
            <li>
              <Link to="/faq" className="flex">
                <img src={faq} alt="faq" width={25} className="mr-2" />
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
