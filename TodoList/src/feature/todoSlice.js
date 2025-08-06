import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  value: [{ title: "Hello world", date: "20/8/2025" }],
};

const TodoApp = createSlice({
  name: "Todo",
  initialValue,
  reducers: {
    todo: {
      title: "first todo task",
      date: "25/7/24",
    },
    todotask(state) {
      state.value.push(
       { todo}
      );
    },
  },
});

export default TodoApp.reducer;
export const {todotask}= TodoApp.actions