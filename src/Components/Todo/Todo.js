import React from "react";
import { List, Button } from "antd";
import {
  DeleteFilled,
  EditOutlined,
  CloseCircleOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../../Redux/Slices/TodoSlice";
import "./Todo.css";
import ModalConfig from "../Modal/ModalConfig";

function Todo({ content, index }) {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = React.useState(false);

  const onDeleteTask = (e) => {
    e.preventDefault();
    dispatch(deleteTask(index));
  };

  const onEditTask = (input) => {
    dispatch(editTask({ index, task: input }));
  };

  //actions when task is not canceled or checked
  const listAction = [];
  listAction[0] = (
    <Button
      onClick={onDeleteTask}
      type={!content.canceled && !content.checked && "primary"}
      danger
      shape="circle"
      key="delete"
    >
      <DeleteFilled />
    </Button>
  );
  listAction[1] = (
    <Button
      onClick={() => setIsVisible(true)}
      type="primary"
      shape="circle"
      key="edit"
    >
      <EditOutlined />
    </Button>
  );
  listAction[2] = (
    <Button
      danger
      type="primary"
      onClick={() => {
        dispatch(editTask({ index, type: "canceled" }));
      }}
      shape="circle"
      key="close"
    >
      <CloseCircleOutlined />
    </Button>
  );
  listAction[3] = (
    <Button
      type="primary"
      className="button__green "
      onClick={() => dispatch(editTask({ index, type: "checked" }))}
      shape="circle"
      key="checkbutton"
    >
      <CheckCircleFilled />
    </Button>
  );

  const ActionChecked = listAction[0];

  return (
    <div>
      <List.Item
        className={`todo ${content.canceled && "todo__canceled"} ${
          content.checked && "todo__finished"
        }`}
        actions={
          !content.canceled && !content.checked ? listAction : [ActionChecked]
        }
      >
        <List.Item.Meta
          title={content.todo}
          description={new Date(content.date).toDateString()}
        />
      </List.Item>
      <ModalConfig
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        onOk={onEditTask}
      />
    </div>
  );
}

export default Todo;
