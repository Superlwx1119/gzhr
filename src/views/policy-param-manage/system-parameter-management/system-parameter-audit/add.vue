<template>
  <form-dialog :title="dialogtitle" :is-show="show" width="508px" new-class="small" @update:isShow="updateIsShow" @resetForm="resetForm">
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px">
      <div class="box">
        <div class="box-body">
          <el-row :gutter="10">
            <el-col :span="24">
              <el-form-item label="审核状态" prop="参数编码">
                <el-radio v-model="radio" label="1">通过</el-radio>
                <el-radio v-model="radio" label="2">不通过</el-radio>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="备注" prop="备注">
                <el-input v-model="addForm.备注" type="textarea" :rows="3" placeholder="请输入" />
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
  name: 'Add',
  components: {
  },
  mixins: [],
  props: {
    show: {
      type: Boolean,
      default: () => { return false }
    },
    dialogtitle: {
      type: String,
      default: () => { return false }
    }
  },
  data() {
    return {
      radio: '1',
      value1: '',
      addForm: {
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
      this.$refs.addForm.resetFields()
    },
    close() {
      this.$emit('update:show', false)
    },
    confirm() {}
  }
}
</script>

<style scoped lang="scss"></style>
