"use client";
import { useEffect } from "react";

const CustomSubstackWidget = ({
  substackUrl,
  placeholder,
  buttonText,
  theme,
  colors,
}) => {
  useEffect(() => {
    window.CustomSubstackWidget = {
      substackUrl: substackUrl || "felixramallo.substack.com",
      placeholder: placeholder || "Escribe tu correo electrónico",
      buttonText: buttonText || "Subscribir",
      theme: theme || "custom",
      colors: colors || {
        primary: "#e10613",
        input: "#FFFFFF",
        email: "#747474",
        text: "#FFFFFF",
      },
    };

    const script = document.createElement("script");
    script.src = "https://substackapi.com/widget.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [substackUrl, placeholder, buttonText, theme, colors]); // Dependencias para re-ejecutar si cambian

  return <div id="custom-substack-embed" className=" scale-90 "></div>;
};

export default CustomSubstackWidget;
