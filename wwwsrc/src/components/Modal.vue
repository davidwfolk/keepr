<template>
  <div class="modal">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{title}}</h5>
          <button
            type="button"
            class="close"
            id="close-btn"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body rounded-bottom">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Modal',
  props: ["title"],
  data() {
    return {}
  },
  computed: {},
  methods: {},
  components: {}
}
</script>


<style scoped>
</style>