import React from "react";
import { List as AntDesignList } from "antd";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";
import { Selector as todoSelector } from "../../Redux/Slices/TodoSlice";


function List() {
  const todos = useSelector(todoSelector);
  return (
    <AntDesignList
      style={{marginBottom:"20px",overflowY:"auto"}}
      locale={{ emptText: "No todos items" }}
      dataSource={todos}
      
    >
      {todos.map((todo,index)=>
      <Todo content={todo} index={index} key={index} />)}
    </AntDesignList>
  );
}

export default List;
