import { useSelector } from "react-redux";

export default function ThemeComponent({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className="bg-white text-black dark:bg-[rgb(16,23,42)] dark:text-gray-200 min-h-screen">
        {children}
      </div>
    </div>
  );
}
