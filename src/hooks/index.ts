import { useEffect, useState } from "react";

type ThemeType = "light" | "dark";

const useTheme = () => {
  const [curTheme, setCurTheme] = useState<ThemeType>("light");

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          const target = mutation.target as Element;
          const theme = target.getAttribute("data-theme") as ThemeType;
          setCurTheme(theme);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return curTheme;
};

export default useTheme;
