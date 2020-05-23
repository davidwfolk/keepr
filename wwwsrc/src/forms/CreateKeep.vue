<template>
  <div class="createKeep">
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
      <div class="form-group">
        <label for="img">Image Url</label>
        <input
          type="number"
          name="img"
          class="form-control"
          placeholder="Enter image url...."
          v-model="newKeep.img"
        />
      </div>
      <div class="form-check">
        <label class="form-check-label" for="isPrivate">Do you want this to be Public?</label>
        <input type="checkbox" class="form-check-input" id="isPrivate" @click="togglePublic()" />
      </div>
      <button type="submit" class="btn btn-primary">Create Post</button>
    </form>
  </div>
</template>


<script>
export default {
  name: 'createKeep',
  data() {
    return {
      isPrivate: true,
      newKeep: {}
    }
  },
  computed: {},
  methods: {
        togglePublic() {
      if (this.isPrivate) {
        this.isPrivate = false;
      } else {
        this.isPrivate = true;
      }
    },
      createKeep() {
        this.newKeep.isPrivate = this.isPrivate
        this.$store.dispatch("createKeep", this.newKeep)
      }

  },
  components: {}
}
</script>


<style scoped>
</style>