<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="small"
    :width="'500px'"
    @update:isShow="isShow"
  >
    <div class="box">
      <el-form label-width="105px">
        <el-col :span="24">
          <el-form-item label="审核状态：">
            <el-radio-group v-model="form.resource">
              <el-radio label="审核通过" />
              <el-radio label="审核不通过" />
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="审核意见：">
            <el-input v-model="form.desc" type="textarea" />
          </el-form-item>
        </el-col>
        <el-col :span="24" style="text-align: right;">
          <el-button type="primary" @click="closeDialog">取消</el-button>
          <el-button type="primary" @click="saveEvent">确认</el-button>
        </el-col>
      </el-form>
    </div>
  </form-dialog>
</template>
<script>
export default {
  components: {
  },
  model: {
    prop: 'isDialogVisible',
    event: 'closeAll'
  },
  props: {
    isDialogVisible: {
      type: Boolean,
      default: false
    },
    dialogTitle: {
      type: String,
      default: '标题'
    }
  },
  data() {
    return {
      loading: false,
      form: {
      }
    }
  },
  methods: {
    // resetForm() {
    //   this.$emit('closeAll', false)
    //   this.$refs.ruleFrom.elForm.resetFields()
    // },
    closeDialog() {
      this.$emit('closeAll', false)
    },
    saveEvent() {
      this.$msgSuccess('保存成功')
      this.$emit('closeAll', false)
    },
    // },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.box-body {
  height: 100%;
}
.detail-info {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 16px;
  & > div {
    margin-right: 30px;
    label {
      color: #636363;
    }
    span {
      color: #101010;
    }
  }
}
.pf-table .el-table {
  min-height: 400px !important;
}
</style>
