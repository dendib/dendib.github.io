import { Color } from "antd/es/color-picker";
import "./Button.scss";

const Buttons = ({color,onClick, text, width = "212px", height = "56px", fontSize = "13px" }) => {
  return (
    <button className="btn-for-all"
      onClick={onClick} 
      style={{
        color: color,
        width: width,
        height: height,
        cursor: "pointer",
        fontSize,
        borderRadius: "100px",
      }}
    >
      {text}
    </button>
  );
};

export default Buttons;
