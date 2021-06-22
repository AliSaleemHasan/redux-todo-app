import React from "react";
import { Button, Input, Modal as Moda } from "antd";
import "./ModalConfig.css";

function ModalConfig({onOk,isVisible,setIsVisible}) {
  const [input, setInput] = React.useState("");
  const onOkClick = (e) => {
    e.preventDefault();
    if (!input) return;
    onOk(input);
    setInput("");
    setIsVisible(false);
  };
  return (
    <div>
      <Moda
        centered
        visible={isVisible}
        mask={true}
        style={{ borderRadius: "40px" }}
        footer={null}
        closable={false}
        maskStyle={{ background: "rgba(20,20,20,0.5) ,filter:blue(5rem)" }}
      >
        <div className="modalContent">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            id="modalContent__input"
            placeholder="Type Any Task ..."
          />
          <Button
            onClick={() => setIsVisible(false)}
            danger
            className="modalCotnent-button button-1"
          >
            Cancel
          </Button>
          <Button onClick={onOkClick} className="modalCotnent-button button-2">
            Done
          </Button>
        </div>
      </Moda>
      
    </div>
  );
}

export default ModalConfig;
