<template>
  <div class="vaultkeep text-center">
    <h1 class="text-white text-center">Welcome to the Lockroom</h1>
    <h4 class="text-white text-center">Here you'll find all of your saved posts in your lockers</h4>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <DisplayVaults v-for="vault in myVaults" :key="vault.id" :vaultData="vault"></DisplayVaults>

        
      </div>
    </div>
  </div>
</template>


<script>
import DisplayVaults from "../components/DisplayVaults"
export default {
  name: 'vaultkeep',
  data() {
    return {}
  },
  mounted () {
      this.$store.dispatch("getMyVaults")
  },
  computed: {
        user() {
      return this.$auth.user;
    },
    myVaults() {
      return this.$store.state.myVaults     
    },
  },
  methods: {},
  components: {
    DisplayVaults
  }
}
</script>


<style scoped>
</style>