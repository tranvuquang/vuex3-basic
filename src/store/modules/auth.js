const authModule = {
  state: {
    auth: {
      isAuthenticated: true,
    },
  },

  getters: {
    isAuthenticated: (state) => state.auth.isAuthenticated,
  },

  actions: {},

  mutations: {
    TOGGLE_AUTH(state) {
      state.auth.isAuthenticated = !state.auth.isAuthenticated;
    },
  },
};

export default authModule;
