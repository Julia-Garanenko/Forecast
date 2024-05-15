import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <p className="link-to-open-source">
      <a
        href="https://github.com/Julia-Garanenko/Forecast"
        target="blank"
        className="link"
      >
        Open-source code
      </a>
      , by Julia Garanenko
    </p>
  );
}