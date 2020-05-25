<template>
  <div class="CreateVault">
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
      <button type="submit" class="btn btn-primary" data-dismiss="modal">Create Locker</button>
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
  computed: {},
  methods: {
      createVault() {
        this.$store.dispatch("createVault", this.newVault)
        // console.log(this.keepData);
        
      },

  },
  components: {}
}
</script>


<style scoped>
</style>