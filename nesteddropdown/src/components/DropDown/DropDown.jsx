import "./DropDown.css";
import DropDownButton from "../DropDownButton/DropDownButton";
import DropDownContent from "../DropDownContent/DropDownContent";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import React, { useState, useEffect, useRef } from "react";

const SELECT_ITEM = "Select item";
function DropDown({ data, item = SELECT_ITEM }) {
  const [toggle, setToggle] = useState(false);
  const [select, setSelect] = useState("");

  const dropDownRef = useRef(null);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  const handleSelect = (value) => {
    setSelect(value);
    setToggle(false);
  };

  useEffect(() => {
    const handleEvent = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("click", handleEvent);

    return () => {
      document.removeEventListener("click", handleEvent);
    };
  }, []);

  return (
    <div className="dropDown" ref={dropDownRef}>
      <DropDownButton onClick={handleClick}>
        {`${select ? select : item} `}
        <span>{toggle ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}</span>
      </DropDownButton>
      <DropDownContent
        toggle={toggle}
        setToggle={setToggle}
        onSelect={handleSelect}
      >
        {data}
      </DropDownContent>
    </div>
  );
}

export default DropDown;
