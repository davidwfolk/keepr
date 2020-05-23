<template>
  <div class="row card-deck bg-transparent border-0">
    <div
      class="card col-3 border rounded pt-3 text-center"
      v-for="keep in publicKeeps"
      :key="keep.id"
    >
      <span v-if="keep.isPrivate == false">
        <img :src="keep.img" class="card-img-top " alt="..." />
        <div class="card-body pb-0">
          <h5 class="card-title m-0 ">{{keep.name}}</h5>
          <!-- <p class="card-text">{{keep.description}}</p> -->
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item pt-1"></li>
          <li class="list-group-item">{{keep.views}} {{keep.shares}} {{keep.shares}}</li>
          <li class="list-group-item">BUTTONS GO HERE</li>
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
  methods: {},
  components: {}
}
</script>


<style scoped>
</style>