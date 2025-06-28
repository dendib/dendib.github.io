import "./Button.scss";
interface ButtonProps {
  text : string;
  onClick: () => void;
  width?: string
  height?: string
  fontSize?: string
}
const Buttons:  React.FC<ButtonProps>  = ({onClick, text, width = "212px", height = "56px", fontSize = "13px" }) => {
  return (
    <button className="btn-for-all"
      onClick={onClick} 
      style={{
       
        width,
        height,
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
