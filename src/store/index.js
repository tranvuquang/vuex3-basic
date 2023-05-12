import { createStore } from "vuex";
import axios from "axios";

const storeData = {
  state: {
    todos: [
      //   {
      //     id: 1,
      //     title: "Viec 1",
      //     completed: false,
      //   },
      //   {
      //     id: 2,
      //     title: "Viec 2",
      //     completed: true,
      //   },
      //   {
      //     id: 3,
      //     title: "Viec 3",
      //     completed: false,
      //   },
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
    DELETE_TODO(state, todoId) {
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
    ADD_TODO(state, newTodo) {
      state.todos.unshift(newTodo);
    },
    SET_TODOS(state, todos) {
      state.todos = todos;
    },
  },
  actions: {
    // deleteTodo(context, todoId) {
    //   context.commit("DELETE_TODO", todoId);
    // },
    async deleteTodo({ commit }, todoId) {
      try {
        await axios.delete(
          `https://jsonplaceholder.typicode.com/todos/${todoId}`
        );
        commit("DELETE_TODO", todoId);
      } catch (error) {
        console.log(error);
      }
    },
    // addTodo(context, newTodo) {
    //   context.commit("ADD_TODO", newTodo);
    // },
    async addTodo({ commit }, newTodo) {
      try {
        await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
        commit("ADD_TODO", newTodo);
      } catch (error) {
        console.log(error);
      }
    },
    async getTodos(context) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        context.commit("SET_TODOS", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};

const store = createStore(storeData);

export default store;
