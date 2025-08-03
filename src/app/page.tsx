"use client";

import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
      <ThemeToggle />
      <Link
        href={"mailto:Info@chmd.ir"}
        className="w-8 p-5 h-8 bg-white fixed top-4 right-4 rounded-full flex items-center justify-center text-white font-bold text-sm hover:bg-yellow-300 transition-colors cursor-pointer"
      >
        <span className="text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="info-button-svg"
            viewBox="-50 -50 100 100"
            opacity="0"
            style={{ opacity: 1 }}
            width="66"
            height="66"
          >
            <circle
              id="info-button-fill"
              cx="0"
              cy="0"
              r="25"
              stroke="#000000"
              fillOpacity="0"
              strokeWidth="3.3px"
              opacity="1"
            ></circle>
            <g id="info-glyph" style={{ transform: "rotate(0deg)" }}>
              <line
                id="cross-x"
                x1="0"
                y1="0"
                x2="0"
                y2="0"
                stroke="#000000"
                strokeWidth="4.7px"
                strokeLinecap="round"
                opacity="1"
                style={{ opacity: 0 }}
              ></line>
              <line
                id="stem-x"
                x1="0"
                y1="11"
                x2="0"
                y2="-1.375"
                stroke="#000000"
                strokeWidth="4.7px"
                strokeLinecap="round"
              ></line>
              <circle
                id="dot-i"
                cx="0"
                cy="-10.5"
                r="3"
                fill="black"
                opacity="1"
              ></circle>
            </g>
          </svg>
        </span>
      </Link>
      <div className="w-full flex flex-col items-center justify-center gap-6 text-4xl md:text-6xl lg:text-8xl">
        <div className=" w-11/12 md:w-1/2 py-2 border-b-3 flex items-center justify-center border-black dark:border-white">
          <TypewriterComponent
            options={{
              strings: ["CHMD IR", "chitgar modern district"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="text-4xl">منطقه مدرن چیتگر</p>
      </div>
    </div>
  );
};

export default Home;
