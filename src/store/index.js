import { createStore } from "vuex";

const storeData = {
  state: {
    todos: [
      {
        id: 1,
        title: "Viec 1",
        completed: false,
      },
      {
        id: 2,
        title: "Viec 2",
        completed: true,
      },
      {
        id: 2,
        title: "Viec 3",
        completed: false,
      },
    ],
    auth: {
      isAuthenticated: false,
    },
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.completed);
    },
    progress: (state, getters) => {
      const doneTodos = getters.doneTodos;
      //   const doneTodos = state.todos.filter((todo) => todo.completed);
      return Math.round((doneTodos.length / state.todos.length) * 100);
    },
  },
};

const store = createStore(storeData);

export default store;
