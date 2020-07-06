<template>
  <!-- 奖励金发放明细-->
  <form-dialog title="奖励金发放明细" width="1000px" new-class="big" :is-show="visible" @update:isShow="updateIsShow">
    <h1 style="text-align: center">xxx市级2020年度特殊人群奖励金发放明细</h1>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancelEdit()">取消</el-button>
      <el-button type="primary" @click="submit('form')">保存</el-button>
    </span>
  </form-dialog>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    form: {
      type: Object,
      default: () => {
      }
    },
    show: { type: Boolean, default: () => false }
  },
  data() {
    return {
      editForm: this.form,
      visible: this.show,
      rules: {}
    }
  },
  computed: {

  },
  watch: {
    show: function(newVal, oldVal) {
      this.visible = this.show
    },
    editForm: function() {
      this.editForm = this.form
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
      // this.$refs.form.clearValidate()
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
