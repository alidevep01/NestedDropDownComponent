import React from "react";
import DropDownItem from "../DropDownItem/DropDownItem";

function DropDownContent({ children, toggle, setToggle, onSelect }) {
  return (
    <div>
      {children.map((item, index) => {
        return (
          <DropDownItem
            key={item.id}
            value={item.label}
            toggle={toggle}
            setToggle={setToggle}
            onSelect={onSelect}
          />
        );
      })}
    </div>
  );
}

export default DropDownContent;
