import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

interface Task {
  id: string;
  content: string;
}

export const todoSlice = createSlice({
  name: "todos",
  initialState: [] as Task[],
  reducers: {
    addTodo: {
      reducer: (state: Task[], action: PayloadAction<Task>) => {
        state.push(action.payload);
      },
      prepare: (content: string) => ({
        payload: {
          id: v4(),
          content,
        },
      }),
    },
    deleteTodo: {
      reducer: (state: Task[], action: PayloadAction<Pick<Task, "id">>) => {
        const index = state.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) state.splice(index, 1);
      },
      prepare: (id: string) => ({
        payload: { id },
      }),
    },
  },
});
