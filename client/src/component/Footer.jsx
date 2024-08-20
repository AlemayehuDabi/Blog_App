import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

const FooterComp = () => {
  return (
    <Footer container className="border-t-8  border-cyan-600 ">
      <div className="space-y-10 whitespace-nowrap">
        <div>
          <Link
            to="/"
            className="self-center  text-xl font-semibold sm:text-xl dark:text-white"
          >
            <span className="px-2  py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white">
              Alex's
            </span>
            Blog
          </Link>
        </div>
        <div className="grid px-10 grid-cols-2 gap-10 sm:grid-cols-3 md:gap-48 lg:gap-80 xl:gap-96 xl:px-40">
          <div>
            <Footer.Title title="About" className="font-bold" />
            <Footer.LinkGroup col>
              <Footer.Link>100 Js Project</Footer.Link>
              <Footer.Link>Alex's Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Follow us" className="font-bold" />
            <Footer.LinkGroup col>
              <Footer.Link>100 Js Project</Footer.Link>
              <Footer.Link>Alex's Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" className="font-bold" />
            <Footer.LinkGroup col>
              <Footer.Link>100 Js Project</Footer.Link>
              <Footer.Link>Alex's Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <Footer.Divider />
        <div className="py-5 flex px-10  flex-col space-y-6 items-center sm:space-y-0 justify-center  sm:flex-row sm:justify-between ">
          <div>
            <Footer.Copyright
              href="#"
              by="Alex's Blog"
              year={new Date().getFullYear()}
            />
          </div>
          <div className="flex space-x-5">
            <Footer.Icon icon={BsFacebook} />
            <Footer.Icon icon={BsTwitter} />
            <Footer.Icon icon={BsGithub} />
            <Footer.Icon icon={BsInstagram} />
            <Footer.Icon icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
