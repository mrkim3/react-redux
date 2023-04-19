import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// export const addToDo = (text, id) => {
//   return {
//     type: "ADD",
//     text,
//     id,
//   };
// };
// export const deleteToDo = (id) => {
//   return {
//     type: "DELETE",
//     id,
//   };
// };

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");
// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case ADD:
//             const newToDoObj = { text: action.text, id: Date.now() };
//             return [newToDoObj, ...state];
//         case DELETE:
//             const cleaned = state.filter(toDo => toDo.id !== action.id);
//             return cleaned;
//         default:
//             return state;
//     }
// };
const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.unshift({ text: action.payload.text, id: action.payload.id });
    },
    [deleteToDo]: (state, action) =>
        state.filter((toDo) => toDo.id !== action.payload),
});

//const store = createStore(reducer);
const store = configureStore({ reducer });
export default store;