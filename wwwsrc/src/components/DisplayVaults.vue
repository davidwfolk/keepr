<template>
  <div class="displayvaults col-md-3 mx-auto mt-3 text-center">
    <button class="btn btn-block btn-info" @click="getVaultKeep()">
        <h5 class="card-title text-center pt-2">{{vaultData.name}}</h5>
        <h6 class="card-title text-center">{{vaultData.description}}</h6>
    </button>
      <!-- <ul class="list-group list-group-flush">
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
        <Buttons :keepData="keepData"></Buttons>
      </ul> -->
  </div>
</template>


<script>
export default {
  name: 'displayvaults',
  props:["vaultData"],
  data(){
    return {}
  },
  mounted() {
    return this.$auth.user
  },
  computed:{

  },
  methods:{
    getVaultKeep() {
      console.log(this.$store.dispatch("getVaultKeep", this.vaultData));
      

    }
  },
  components:{}
}
</script>


<style scoped>

</style>