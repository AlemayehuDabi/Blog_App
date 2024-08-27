import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../component/DashSidebar";
import DashProfile from "../component/DashProfile";
import { tabParams } from "../Redux/Search/searchSlice";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tab = urlParams.get("tab");
    dispatch(tabParams(tab));
  }, [location.search]);

  const { tab } = useSelector((state) => state.search);
  console.log(tab);

  return (
    <div className="md:flex">
      {/* sidebar */}
      <div className="md:min-h-screen">
        <DashSidebar />
      </div>
      {/* dashboards */}
      <div className="">{tab === "profile" && <DashProfile />}</div>
    </div>
  );
};

export default Dashboard;
