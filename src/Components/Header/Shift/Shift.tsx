import { FiMoon } from "react-icons/fi";
import { HiOutlineSun } from "react-icons/hi";
import { useEffect } from "react";
import { useFilter } from "../../../CustomHook";

function Shift() {
  const { darkMode, setDarkMode } = useFilter();

  useEffect(() => {
    const savedShift = localStorage.getItem("shift");
    if (savedShift !== null) {
      setDarkMode(JSON.parse(savedShift));
    }
  }, [setDarkMode]);

  useEffect(() => {
    localStorage.setItem("shift", JSON.stringify(darkMode));
  }, [darkMode]);

  function toggleShift() {
    setDarkMode(!darkMode);
  }

  return (
    <div
      onClick={toggleShift}
      aria-label="Toggle dark mode"
      className="w-[38px] h-[38px] bg-purple rounded-[5px] flex justify-center items-center text-white text-[24px] hover:cursor-pointer hover:bg-ph transition-colors duration-300"
    >
      {darkMode ? <HiOutlineSun /> : <FiMoon />}
    </div>
  );
}

export default Shift;
