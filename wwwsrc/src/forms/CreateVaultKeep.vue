<template>
  <div class="CreateVault">
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter name...."
          v-model="newVault.name"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          name="model"
          class="form-control"
          placeholder="Enter description...."
          v-model="newVault.description"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="addToVaultKeep()" data-dismiss="modal">Create Locker</button>
    </form>
  </div>
</template>


<script>
export default {
  name: 'CreateVault',
  props:["keepData"],
  data() {
    return {
      newVault: {}
    }
  },
  mounted() {
    return this.$store.state.myVaults
  },
  computed: {},
  methods: {
     async addToVaultKeep() {
       try {
         await this.$store.dispatch("createVault", this.newVault)
         this.vaultKeep.vaultId = myVaults.id;
         this.vaultKeep.keepId = this.activeKeep.id;
         this.$store.dispatch("createVaultKeep", this.vaultKeep);
       } catch (error) {
         
       }
      }

  },
  components: {}
}
</script>


<style scoped>
</style>