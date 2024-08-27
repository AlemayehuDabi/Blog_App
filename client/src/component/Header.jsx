import {
  Button,
  Dropdown,
  DropdownHeader,
  Navbar,
  TextInput,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "flowbite-react";
import { GoSignOut } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { toggleTheme } from "../Redux/theme/themeSlice";
import { IoSunnyOutline } from "react-icons/io5";

const Header = () => {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

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
      <div className="flex space-x-5 md:order-2">
        <Button color="gray" pill onClick={() => dispatch(toggleTheme())}>
          {theme === "light" ? (
            <FaMoon size={15} />
          ) : (
            <IoSunnyOutline size={20} />
          )}
        </Button>
        {currentUser ? (
          <Dropdown
            placement="left-end"
            inline
            arrowIcon={false}
            label={<Avatar rounded img={`${currentUser.rest.imageUrl}`} />}
          >
            <DropdownHeader>
              <span className="block text-sm truncate font-bold">
                @{currentUser.rest.username}
              </span>
              <span className="block text-sm truncate font-normal">
                {currentUser.rest.email}
              </span>
            </DropdownHeader>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item icon={CgProfile}>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item icon={GoSignOut}>Signout</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/login">
            <Button
              color="gray"
              className="border-none"
              outline
              pill
              gradientDuoTone="purpleToBlue"
            >
              <span>Sign In</span>
            </Button>
          </Link>
        )}

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
