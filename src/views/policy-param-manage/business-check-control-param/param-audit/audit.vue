<template>
  <form-dialog title="审核" :is-show="show" width="608px" new-class="small" @update:isShow="updateIsShow" @resetForm="resetForm">
    <el-form ref="auditForm" :model="auditForm" :rules="rules" label-width="105px">
      <div class="box">
        <div class="box-body">
          <el-row :gutter="10">
            <el-col :span="24">
              <el-form-item label="审核状态" prop="审核状态">
                <el-radio-group v-model="auditForm.审核状态">
                  <el-radio label="1">审核通过</el-radio>
                  <el-radio label="2">审核不通过</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="审核意见" prop="审核意见">
                <el-input v-model="auditForm.审核意见" type="textarea" :rows="4" placeholder="请输入" />
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="confirm">保存</el-button>
    </span>
  </form-dialog>
</template>

<script>
export default {
  name: 'Audit',
  components: {
  },
  mixins: [],
  props: {
    show: {
      type: Boolean,
      default: () => { return false }
    }
  },
  data() {
    return {
      auditForm: {
      },
      rules: {
      }
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    updateIsShow(v) {
      this.$emit('update:show', v)
    },
    resetForm() {
      this.$refs.auditForm.resetFields()
    },
    close() {
      this.$emit('update:show', false)
    },
    confirm() {
      this.close()
      this.$msgSuccess('审核成功!')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
