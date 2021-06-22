import React from "react";
import "./TodoContainer.css";
import ModalConfig from "../Modal/ModalConfig";
import { useDispatch } from "react-redux";
import {addTask} from "../../Redux/Slices/TodoSlice"
import List from "../List/List";
import PlusOutlined from "@ant-design/icons/PlusOutlined";

import {Button } from "antd"
function TodoContainer() {
  const [isVisible, setIsVisible] = React.useState(false);
  const dispatch=useDispatch();
  const addNewTask=(input)=>{
    dispatch(addTask(input))
  }
  return (
    <div className="todoContainer">
      <List />
      <ModalConfig onOk={addNewTask} isVisible={isVisible} setIsVisible={setIsVisible}/>
      <Button
        size="large"
        shape="circle"
        style={{ background: "#45E220", color: "#fff", marginBottom: "10px" }}
        onClick={() => setIsVisible(true)}
        icon={<PlusOutlined />}
      />
    </div>
  );
}

export default TodoContainer;
