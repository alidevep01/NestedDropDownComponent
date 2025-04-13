import "./DropDownButton.css";
function DropDownButton({ children, onClick }) {
  return (
    <button className="dropDown-btn" onClick={onClick}>
      {children}
    </button>
  );
}

export default DropDownButton;
