<template>
  <div class="home">
    <h1 class="text-white text-center">Welcome to Par-adise</h1>
    <h5 class="text-white text-center">Posting the Lastest Golf Equipment & Accessories!</h5>
    <div class="container">
      <publicKeeps></publicKeeps>
      </div>
    </div>
</template>

<script>
import PublicKeeps from "../components/PublicKeeps.vue"
export default {
  name: "home",
  computed: {
    user() {
      return this.$auth.user;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
  components: {
    PublicKeeps
  }
};
</script>
