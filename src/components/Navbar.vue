<template>
  <div class="navbar">
    <h1>My VueX App Todos</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li v-if="auth.isAuthenticated">
        Total todos: {{ todos.length }}
        <button @click="TOGGLE_AUTH">Logout</button>
      </li>
      <button v-else @click="TOGGLE_AUTH">Login</button>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  computed: mapState(["todos", "auth"]),
  methods: mapMutations(["TOGGLE_AUTH"]),
  //   methods: {
  //     loginOrLogout() {
  //       this.$store.commit("TOGGLE_AUTH");
  //     },
  //   },
};
</script>

<style>
.navbar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}

.navbar ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
</style>
