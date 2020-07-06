<template>
  <form-dialog :title="bouncedTitle" :is-show="visible" width="760px" size="middle" @update:isShow="updateIsShow">
    <span slot="footer" class="dialog-footer">
      <el-button @click="print">打印</el-button>
      <el-button type="primary" @click="ShutDown">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>

export default {
  components: {

  },
  mixins: [],
  props: {
    show: { type: Boolean, default: () => false },
    bouncedTitle: { type: String, default: '' }
  },
  data() {
    return {
      visible: this.show
    }
  },
  computed: {},
  watch: {
    show: function(newVal, oldVal) {
      this.visible = this.show
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    updateIsShow(v) {
      this.$emit('update:show', v)
    },
    ShutDown() {
      this.visible = false
    // this.$emit('update:show', false)
    },
    print() {
      this.visible = false
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>

</style>
