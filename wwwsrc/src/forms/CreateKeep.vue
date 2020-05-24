<template>
  <div class="CreateKeep">
    <form>
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
          type="text"
          name="img"
          class="form-control"
          placeholder="Enter image url...."
          v-model="newKeep.img"
        />
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" value="true" unchecked-value="false" id="isPrivate" @click="checkPublic()"  />
        <label class="form-check-label" for="isPrivate">Keep Post Private?</label>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="createKeep()" data-dismiss="modal">Create Post</button>
    </form>
  </div>
</template>


<script>
export default {
  name: 'CreateKeep',
  data() {
    return {
      isPrivate: false,
      newKeep: {}
    }
  },
  computed: {},
  methods: {
    checkPublic() {
        if (isPrivate) {
          this.isPrivate = true;
        } else {
          this.isPrivate = false;
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