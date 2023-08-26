const reducer = (state, action) => {
  if (action.type === "add") {
    return [
      ...state,
      {
        id: Math.random(),
        text: action.payload.text,
        isCompleted: false,
      },
    ];
  } else if (action.type === "delete") {
    return state.filter((t) => t.id !== action.payload.id);
  } else if (action.type === "clear-completed") {
    return state.filter((todo) => !todo.isCompleted);
  } else if (action.type === "update") {
    return state.map((todo) => {
      if (todo.id === action.payload.updatedTodo.id) {
        return action.payload.updatedTodo;
      }
      return todo;
    });
  }
};

const data = [
  {
    id: Math.random(),
    text: "Learn React",
    isCompleted: false,
  },
  {
    id: Math.random(),
    text: "Learn CSS",
    isCompleted: false,
  },
  {
    id: Math.random(),
    text: "Learn JS",
    isCompleted: false,
  },
];

export { reducer, data };
