<template>
  <div class="vault">
    <div class="row">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >Choose from a vault below</button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item"
          v-for="vault in vaults"
          :key="vault._id"
          :vaultData="vault"
          href="#"
        >{{vault.name}}</a>
      </div>
    </div>
    <div class="row">
      <h4>or create a new one</h4>
      <CreateVault></CreateVault>
    </div>
  </div>
</template>


<script>
import CreateVault from "../forms/CreateVault"
export default {
  name: 'vault',
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch("getVaults", this.$auth.user)
  },
  computed: {
    vaults() {
      return this.$store.state.vaults
            
    }
  },
  methods: {},
  components: {
    CreateVault
  }
}
</script>


<style scoped>
</style>