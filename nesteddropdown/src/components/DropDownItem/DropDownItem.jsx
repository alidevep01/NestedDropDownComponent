import "./DropDownItem.css";

function DropDownItem({ value, toggle, onSelect }) {
  return (
    <div className="dropDown-item">
      <button
        className={`item-btn ${toggle ? "visible" : ""}`}
        onClick={() => onSelect(value)}
      >
        {value}
      </button>
    </div>
  );
}

export default DropDownItem;
