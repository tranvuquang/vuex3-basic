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
        id: 3,
        title: "Viec 3",
        completed: false,
      },
    ],
    auth: {
      isAuthenticated: true,
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
  mutations: {
    TOGGLE_AUTH(state) {
      state.auth.isAuthenticated = !state.auth.isAuthenticated;
    },
    MARK_COMPLETE(state, todoId) {
      state.todos.map((todo) => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
};

const store = createStore(storeData);

export default store;
