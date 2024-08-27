import { Sidebar } from "flowbite-react";
import { HiUser, HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const DashSidebar = () => {
  const { tab } = useSelector((state) => state.search);
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to={"/dashboard?tab=profile"}>
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label={"user"}
              labelColor="dark"
              as="div"
            >
              profile
            </Sidebar.Item>
          </Link>

          <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer">
            Sign-out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSidebar;
