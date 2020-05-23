<template>
  <div class="home">
    <h1 class="text-white text-center">Welcome to Par-adise</h1>
    <h5 class="text-white text-center">Posting the Lastest Golf Equipment & Accessories!</h5>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <PublicKeeps v-for="keep in publicKeeps" :key="keep.id" :keepData="keep"></PublicKeeps>
      </div>
    </div>
  </div>
</template>

<script>
import PublicKeeps from "../components/PublicKeeps.vue"
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getKeeps");
  },
  computed: {
    user() {
      return this.$auth.user;
    },
    publicKeeps() {
      return this.$store.state.keeps
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },


  },
  components: {
    PublicKeeps
  }
};
</script>
