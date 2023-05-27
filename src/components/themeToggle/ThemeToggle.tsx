import { useContext } from "react";
import { BsSunFill, BsSun, BsMoonStarsFill, BsMoonStars } from "react-icons/bs";
import { themeContext } from "../../contexts/themeContext";
import "./ThemeToggle.scss";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(themeContext);

  return (
    <div className="theme-toggle">
      {theme === "light" ? (
        <BsMoonStarsFill onClick={() => setTheme("dark")} />
      ) : (
        <BsSunFill onClick={() => setTheme("light")} />
      )}
    </div>
  );
};

export default ThemeToggle;
