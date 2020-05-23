<template>
  <div class="KeepDetails">
    <div class="card border rounded pt-3 text-center">
      <img :src="activeKeep.img" class="card-img-top" alt="..." />
      <div class="card-body align-text-bottom pb-0">
        <h5 class="card-title m-0">{{activeKeep.name}}</h5>
        <p class="card-text">{{activeKeep.description}}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item pt-1"></li>
        <li class="list-group-item">
          <span class="mx-3">
            <i class="far fa-eye"></i>
            : {{activeKeep.views}}
          </span>
          <span class="mx-3">
            <i class="fas fa-share"></i>
            : {{activeKeep.shares}}
          </span>
          <span class="mx-3">
            <i class="fas fa-download"></i>
            : {{activeKeep.keeps}}
          </span>
        </li>
        <li class="list-group-item">
          <span class="mx-2">
            <i class="far fa-eye text-white bg-info p-3"></i>
          </span>
          <span class="mx-2">
            <i class="fas fa-share bg-warning p-3"></i>
          </span>
          <span class="mx-2">
            <i class="fas fa-download bg-primary p-3"></i>
          </span>
        </li>
      </ul>

      <div class="card-body" v-if="activeKeep.isPrivate == true">
        <button class="btn btn-danger" @click="deleteKeep()" data-dismiss="modal">Delete</button>
      </div>
      <div v-else>

      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'KeepDetails',

  data() {
    return {}
  },
  mounted () {

  },
  computed: {
    activeKeep() {
    return this.$store.state.activeKeep
        }
  },
  methods: {
    deleteKeep() {
      this.$store.dispatch("deleteKeep", this.activeKeep)
    }
  },
  components: {}
}
</script>


<style scoped>
</style>