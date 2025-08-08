import { createSlice } from "@reduxjs/toolkit"; // 1) import slice

// 2) create initial state
const initialState = {
  todo: [
    // {
    //   title: "hello world",
    //   date: "20/08/2025",
    // }
  ],
};

// 3) assign name , put initialstate , and reducer
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //5) add a actions below
    addTodo: (state, action) => {
      // add a task with the help of action.
      const newTodo = {
        title: action.payload.title,
        date:action.payload.date,
      };
      state.todo.push(newTodo);
    },
    remove : (state , action)=>{
      state.todo.splice(action,1)
    } , 
    update : (state , action)=> {
      const {index , title , date} = action.payload
      state.todo[index] = {title : title , date : date};
    }
  },
});

export default todoSlice.reducer;
export const { addTodo , remove ,update } = todoSlice.actions;
