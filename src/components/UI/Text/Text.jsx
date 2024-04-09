import React from "react";
import "./Text.css";

const Text = ({ text, size }) => {
  return <span className={`text ${size}`}>{text}</span>;
};

export default Text;
