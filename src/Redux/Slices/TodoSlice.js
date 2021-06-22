import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      let todo = {};
      todo.todo = action.payload;
      todo.checked=false;
      todo.date=Date.now();
      todo.canceled=false;
      // todo.closed=false;
      // todo.checked=false;
      state.value.push(todo);
    },
    deleteTask: (state, action) => {
      state.value.splice(action.payload,1);
    },
    editTask: (state, action) => {
      console.log(action)
      if(action.payload.type==="input")
      state.value[action.payload.index].todo = action.payload.task;
      else if(action.payload.type==="checked")
      state.value[action.payload.index].checked=true;
      else if (action.payload.type==="canceled")
      state.value[action.payload.index].canceled=true;

    },
   
  },
});

export const { addTask, deleteTask, editTask } = TodoSlice.actions;

export const Selector = (state) => state.todo.value;
export default TodoSlice.reducer;
