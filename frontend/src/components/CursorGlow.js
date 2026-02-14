import { useEffect } from "react";
import "./CursorGlow.css";

function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");

    const move = (e) => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div id="cursor-glow"></div>;
}

export default CursorGlow;
