import React from "react";
import useTheme from "../Contexts/Theme";

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = () => {
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <>
      <style>
        {`
          .theme-btn {
            padding: 0.6rem 1.2rem;
            border: none;
            border-radius: 50%;
            background: linear-gradient(to right, #6fb9f6, #e9b7b7);
            color: #fff;
            font-size: 1.2rem;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            transition: transform 0.3s ease, background 0.3s ease;
          }

          .theme-btn:hover {
            transform: scale(1.1);
            background: linear-gradient(to right, #5555da, #b6b6be);
          }
        `}
      </style>

      <button className="theme-btn" onClick={onChangeBtn}>
        {themeMode === "dark" ? "🌙" : "🌞"}
      </button>
    </>
  );
}
