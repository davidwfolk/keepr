<template>
  <div class="vaultkeep">
    <h1 class="text-white text-center">Welcome to the Lockroom</h1>
    <h4 class="text-white text-center">Here you'll find all of your saved posts in your lockers</h4>
    <div class="container-fluid">
      <div class="row">
        
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'vaultkeep',
  data() {
    return {}
  },
  computed: {
        user() {
      return this.$auth.user;
    },
  },
  methods: {},
  components: {}
}
</script>


<style scoped>
</style>