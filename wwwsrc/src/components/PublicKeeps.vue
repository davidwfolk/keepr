<template>
  <div class="container">
    <div class="row">
      <div class="card-deck bg-transparent border-0">
        <div
          class="card border rounded pt-3 text-center"
          v-for="keep in publicKeeps"
          :key="keep.id"
        >
          <span v-if="keep.isPrivate == false">
            <img :src="keep.img" class="card-img-top" alt="..." />
            <div class="card-body pb-0">
              <h5 class="card-title m-0">{{keep.name}}</h5>
              <!-- <p class="card-text">{{keep.description}}</p> -->
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item pt-1"></li>
              <li class="list-group-item">
                <span class="mx-3">
                  <i class="far fa-eye"></i>
                  : {{keep.views}}
                </span>
                <span class="mx-3">
                  <i class="fas fa-share"></i>
                  : {{keep.shares}}
                </span>
                <span class="mx-3">
                  <i class="fas fa-download"></i>
                  : {{keep.keeps}}
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
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </span>
          <span v-else></span>
          <!-- <button class="btn btn-danger btn-block" @click="deleteCar(car.id)">Delete</button> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'PublicKeeps',
  data() {
    return {
    }
  },
  mounted() {
    // this.$store.dispatch("getPublicKeeps");
    console.log(this.$store.dispatch("getKeeps"));

  },
  computed: {
    publicKeeps() {
      return this.$store.state.keeps
    }
  },
  methods: {
    addView() {

    },
    addKeep() {

    },
    addShare() {

    }
  },
  components: {}
}
</script>


<style scoped>
</style>