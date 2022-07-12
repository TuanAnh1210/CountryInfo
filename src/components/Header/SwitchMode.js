import { useEffect, useState, useContext, useRef } from "react";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import styles from "./SwitchStyles.module.scss";
import { ThemeContext } from "../ThemeContext/ThemeContext";
function SwitchMode() {
  const themeContext = useContext(ThemeContext);
  const refInput = useRef();
  const refCircle = useRef();
  const refTonggle = useRef();
  const [isDark, setIsDark] = useState(false);

  const handleTonggle = () => {
    refInput.current.checked = !refInput.current.checked;
    setIsDark(refInput.current.checked);
    themeContext.tonggleTheme();
  };

  useEffect(() => {
    const changeBackgroundButton = () => {
      if (isDark) {
        refCircle.current.style.background = "#222";
        refTonggle.current.style.background = "#999";
      } else {
        refCircle.current.style.background = "#fff";
        refTonggle.current.style.background = "#4169e1";
      }
    };
    changeBackgroundButton();
    document.addEventListener("resize", changeBackgroundButton);
    return () => {
      document.removeEventListener("resize", changeBackgroundButton);
    };
  }, [isDark]);
  return (
    <div
      className={styles.TonggleButton}
      ref={refTonggle}
      onClick={handleTonggle}
    >
      <input type="checkbox" className={styles.input} ref={refInput} />
      <div className={styles.Icon}>
        {isDark ? <RiMoonFill /> : <RiSunFill />}
      </div>
      <div className={styles.Circle} ref={refCircle}></div>
    </div>
  );
}

export default SwitchMode;
