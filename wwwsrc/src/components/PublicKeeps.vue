<template>
  <div class="card col-md-3 m-3 pt-2 card text-center">
    <img :src="keepData.img" class="img-fluid" />
    <div class="card-body text-bottom pb-0">
      <h5 class="card-title text-center">{{keepData.name}}</h5>
      <!-- <p class="card-text">{{keep.description}}</p> -->
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <span class="mx-2">
          <i class="far fa-eye"></i>
          : {{keepData.views}}
        </span>
        <span class="mx-2">
          <i class="fas fa-download"></i>
          : {{keepData.shares}}
        </span>
        <span class="mx-2">
          <i class="fas fa-share"></i>
          : {{keepData.keeps}}
        </span>
      </li>
      <span v-if="user != undefined">
        <Buttons :keepData="keepData"></Buttons>
      </span>
      <span v-else></span>
    </ul>
  </div>
</template>


<script>
import Buttons from "../components/Buttons"
export default {
  name: 'PublicKeeps',
  props: ["keepData"],
  data() {
    return {
    }
  },
  mounted() {
    // this.$store.dispatch("getPublicKeeps");
    // console.log(this.$store.dispatch("getKeeps"));

  },
  computed: {
    user() {
      return this.$auth.user
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
  components: { Buttons }
}
</script>


<style scoped>
</style>