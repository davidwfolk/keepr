<template>
  <div class="row justify-content-center">
    <div class="col-3 m-3 border rounded" 
    v-for="keep in publicKeeps" 
    :key="keep.id"
    >
      <h1>{{keep.name}}</h1>
      <h2>{{keep.description}}</h2>
      <img :src="keep.img" class="img-fluid" alt srcset />
      <h2>{{keep.views}}</h2>
      <h2>{{keep.shares}}</h2>
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