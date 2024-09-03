import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data.jsx";

const userSlice = createSlice({
  name: "user",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);  
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const CurrentUser = state.find(user => user.id == id);
      if (CurrentUser) {
        CurrentUser.name = name;
        CurrentUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      return state.filter(user => user.id !== id);
    }
  }
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
