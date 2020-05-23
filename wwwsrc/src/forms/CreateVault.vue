<template>
  <div class="CreateKeep">
    <form @submit.prevent="createVault()">
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
      <button type="submit" class="btn btn-primary">Create Vault</button>
    </form>
  </div>
</template>


<script>
export default {
  name: 'CreateKeep',
  data() {
    return {
      newVault: {}
    }
  },
  computed: {},
  methods: {
      createVault() {
        this.$store.dispatch("createVault", this.newVault)
      }

  },
  components: {}
}
</script>


<style scoped>
</style>