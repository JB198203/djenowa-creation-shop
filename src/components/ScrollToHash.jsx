import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth" });
        });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [hash, pathname]);

  return null;
}
