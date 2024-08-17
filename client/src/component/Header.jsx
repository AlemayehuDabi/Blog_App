import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-md font-semibold sm:text-xl dark:text-white"
      >
        <span className="px-2  py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white">
          Alex's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          placeholder="Search"
          type="text"
          rightIcon={AiOutlineSearch}
          className="w-10 h-10 hidden md:inline outline-slate-800"
        />
      </form>
      <Button className="md:hidden rounded-full" color="gray">
        <AiOutlineSearch />
      </Button>
      <div className="flex space-x-4 md:order-2">
        <Button color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button
            color="gray"
            className="border-none"
            outline
            pill
            gradientDuoTone="purpleToBlue"
          >
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={"div"} active={path === "/"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link as={"div"} active={path === "/about"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link as={"div"} active={path === "/project"}>
          <Link to="/project">Project</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
