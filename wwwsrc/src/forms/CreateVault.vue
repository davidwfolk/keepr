<template>
  <div class="CreateKeep">
    <form @submit.prevent="createKeep()">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter name...."
          v-model="newKeep.name"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          name="model"
          class="form-control"
          placeholder="Enter description...."
          v-model="newKeep.description"
        />
      </div>
      <button type="submit" class="btn btn-primary">Create Post</button>
    </form>
  </div>
</template>


<script>
export default {
  name: 'CreateKeep',
  data() {
    return {
      isPrivate: true,
      newKeep: {}
    }
  },
  computed: {},
  methods: {
      createVault() {
        this.$store.dispatch("createKeep", this.newKeep)
      }

  },
  components: {}
}
</script>


<style scoped>
</style>