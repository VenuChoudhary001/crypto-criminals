import React from "react";
import { motion } from "framer-motion";


export const GLOBAL_CONTEXT = React.createContext();

const Layout = ({ children }) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [mouseVariant, setMouseVariant] = React.useState("hover");

  const textEnter = () => {
    setMouseVariant("textEnter");
  };
  const textLeave = () => {
    setMouseVariant("hover");
  };

  const variant = {
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(0 0 0 / 0.25)",
      border: "1px solid #Dc3c44",
    },
    textEnter: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "#Dc3c44",
      mixBlendMode: "difference",
    },
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    });
    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <>
      <motion.div
        variants={variant}
        animate={mouseVariant}
        className="cursor"
      />

      <GLOBAL_CONTEXT.Provider value={{ magic: textEnter, noMagic: textLeave }}>
        {children}
       
      </GLOBAL_CONTEXT.Provider>
    </>
  );
};

export default Layout;
