import React from "react";
import Buttons from "../../button/Buttons";
import "./FindServies.scss";
import { LeftOutlined } from "@ant-design/icons";

interface Props {
  onBack: () => void;
}

const FindServicetwo: React.FC<Props> = ({ onBack }) => {
  const handleClick = () => {
    window.confirm("С вас 39.000 RUB");
  };

  return (
    <div className="money">
      <button className="btn-back" onClick={onBack}>
        <LeftOutlined />
      </button>

      <Buttons   onClick={handleClick} text="Чинить?" />
    </div>
  );
};

export default FindServicetwo;
