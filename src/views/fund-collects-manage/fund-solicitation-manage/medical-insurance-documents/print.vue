<template>
  <!-- 打印-->
  <form-dialog title="打印" width="1000px" new-class="big" :is-show="visible" @update:isShow="updateIsShow">
    打印打印打印打印打印打印打印打印打印打印打印打印打印打印打印打印打印打印打印打印打印打印打印打印
    <span slot="footer" class="dialog-footer">
      <!--      <el-button @click="cancelEdit()">取消</el-button>-->
      <el-button type="primary" @click="submit('form')">打印</el-button>
      <el-button type="primary" @click="submit('form')">导出</el-button>
    </span>
  </form-dialog>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    // form: {
    //   type: Object,
    //   default: () => {
    //   }
    // },
    show: { type: Boolean, default: () => false }
  },
  data() {
    return {
      visible: this.show,
      rules: {}
    }
  },
  computed: {
    // form: function() {
    //   return this.form
    // }
  },
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
    resetForm() {
      this.$refs.form.resetFields()
    },
    submit(formName) {
      this.cancelEdit()
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     this.cancelEdit()
      //     this.$msgSuccess('成功')
      //   } else {
      //     return false
      //   }
      // })
    },
    cancelEdit() {
      this.visible = false
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
