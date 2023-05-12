<template>
  <p class="progress-bar" v-if="auth.isAuthenticated">
    Progress: {{ progress }}%
  </p>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "ProgressBar",
  computed: {
    ...mapGetters(["progress"]),
    ...mapState(["auth"]),
  },
  //   computed: {
  //     progress() {
  //       return Math.round(
  //         (this.$store.state.todos.filter((todo) => todo.completed).length /
  //           this.$store.state.todos.length) *
  //           100
  //       );
  //     },
  //   },
};
</script>

<style>
.progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(106, 248, 118);
  color: black;
}
</style>
