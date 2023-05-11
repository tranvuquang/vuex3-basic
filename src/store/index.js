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
};

const store = createStore(storeData);

export default store;
