<template>
  <div class="vaultkeep text-center">
    <h1 class="text-white text-center">Welcome to the Lockroom</h1>
    <h4 class="text-white text-center">Here you'll find all of your saved posts in your lockers</h4>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <VKeep v-for="vaultKeep in vaultKeeps" :key="vaultKeep.id" :vaultKeepData="vaultKeep"></VKeep>
      </div>
    </div>
  </div>
</template>


<script>
import DisplayVaults from "../components/DisplayVaults"
import VKeep from "../components/VKeep"
export default {
  name: 'vaultkeep',
  data() {
    return {}
  },
  computed: {
    user() {
      return this.$auth.user;
    },
    vaultKeeps() {
      return this.$store.state.vaultKeeps
    }

  },
  methods: {},
  components: {
    DisplayVaults,
    VKeep
  }
}
</script>


<style scoped>
</style>