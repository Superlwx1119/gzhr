<!-- 新增 编辑 -->
<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
  >
    <div class="box" style="height: auto">
      <form-items :items-datas="itemsDatas1" :form-datas="dataForm" :is-grid="false" />
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
      <el-button type="primary" @click="saveEvent">保存</el-button>
    </span>
  </form-dialog>
</template>
<script>
// import BoxTitle from '@/views/components/PageLayers/box-title'
import FormItems from '@/views/components/PageLayers/form-items'
export default {
  components: {
    FormItems
    // BoxTitle
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
      itemsDatas1: [
        { label: '业务类型', prop: 'xxx', type: 'select', span: 8 },
        { label: '项目名称', prop: 'xxx', type: 'input', span: 8 },
        { label: '项目编码', prop: 'xxx1', type: 'select', span: 8 },
        { label: '显示顺序', prop: 'xxx1', type: 'select', span: 8 },
        { label: '静态表名', prop: 'xxx1', type: 'select', span: 8 },
        { label: '静态代码字段', prop: 'xxx1', type: 'select', span: 8 },
        { label: '静态名称字段', prop: 'xxx1', type: 'select', span: 8 },
        { label: '参数名', prop: 'xxx1', type: 'select', span: 8 },
        { label: '业务表名', prop: 'xxx1', type: 'select', span: 8 },
        { label: '业务代码字段', prop: 'xxx1', type: 'select', span: 8 },
        { label: '业务名称字段', prop: 'xxx1', type: 'select', span: 8 },
        { label: '显示顺序', prop: 'xxx1', type: 'select', span: 8 }
      ],
      dataForm: {
        xxx: '',
        xxx1: ''
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
.special-form {
  /deep/.el-form {
    .el-form-item__label {
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 32px;
      line-height: 14px;
    }
  }
}
.table-transfer-box {
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
}
</style>
