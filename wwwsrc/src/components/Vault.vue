<template>
  <div class="vault container-fluid">
    <div class="row m-auto">
      <button
        class="btn btn-secondary dropdown-toggle m-auto"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >Choose from a locker below</button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item"
          v-for="vault in myVaults"
          :key="vault.id"
          :vaultData="vault"
          href="#"
          :value="vault"
          @click="addToVaultKeep(vault)"
        >{{vault.name}}</a>
      </div>
    </div>
    <div class="row text-center">
      <h4 class="col-12">or create a new one</h4>
      <CreateVault class="text-center m-auto" :keepData="keepData"></CreateVault>
    </div>
  </div>
</template>


<script>
import CreateVault from "../forms/CreateVault"
export default {
  name: 'vault',
  props: ["keepData"],
  data() {
    return {
      vaultKeep: {}
    }
  },
  mounted() {
    this.$store.dispatch("getMyVaults", this.$auth.user.sub)
  },
  computed: {
    myVaults() {
      
      return this.$store.state.myVaults     
    },
    activeKeep(){
      return this.$store.state.activeKeep
    }
  },
  methods: {
     addToVaultKeep(vault) {
        this.vaultKeep.vaultId = vault.id;
        this.vaultKeep.keepId = this.activeKeep.id;
        this.$store.dispatch("createVaultKeep", this.vaultKeep);


        
        
        

      }
  },
  components: {
    CreateVault
  }
}
</script>


<style scoped>
</style>