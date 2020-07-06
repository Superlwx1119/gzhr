<template>
  <form-dialog title="预览征缴单" :is-show="visible" width="760px" size="middle" @update:isShow="updateIsShow">
    <h1>征缴单打印</h1>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel()">取消</el-button>
      <el-button type="primary" @click="print">打印</el-button>
      <el-button type="primary" @click="exportData">导出</el-button>
    </span>
  </form-dialog>
</template>
<script>
export default {
  name: 'Add',
  components: {
  },
  mixins: [],
  props: {
    show: { type: Boolean, default: () => false }
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
      this.cancel()
      this.$emit('update:show', v)
    },
    cancel() {
      this.visible = false
      this.$emit('update:show', false)
    },
    exportData() {
      console.log('导出征缴单')
    },
    print() {
      window.print()
      console.log('打印征缴单')
    }
  }
}
</script>

<style scoped>

</style>
