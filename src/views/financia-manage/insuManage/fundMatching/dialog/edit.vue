<!-- 新增 编辑 -->
<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
  >
    <div class="box" style="height: auto">
      <box-title title-name="到账数据录入" />
      <form-items :items-datas="itemsDatas" :form-datas="dataForm" :is-grid="false" />
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
      <el-button type="primary" @click="saveEvent">保存</el-button>
    </span>
  </form-dialog>
</template>
<script>
import BoxTitle from '@/views/components/PageLayers/box-title'
import FormItems from '@/views/components/PageLayers/form-items'
export default {
  components: {
    FormItems,
    BoxTitle
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
      itemsDatas: [
        { label: '缴款方式', prop: 'xxx', type: 'select', span: 8 },
        { label: '到账日期', prop: 'xxx', type: 'date', span: 8 },
        { label: '银行）金额（元', prop: 'xxx1', type: 'input', span: 8 },
        { label: '银行）缴款账号', prop: 'xxx1', type: 'input', span: 8 },
        { label: '银行）缴款人户名', prop: 'xxx1', type: 'input', span: 8 },
        { label: '备注', prop: 'xxx1', type: 'input', span: 8 },
        { label: '医保区划', prop: 'xxx1', type: 'select', span: 8 },
        { label: '险种', prop: 'xxx1', type: 'select', span: 8 },
        { label: 'POS机终端号', prop: 'xxx1', type: 'input', span: 8 },
        { label: '参考号', prop: 'xxx1', type: 'input', span: 8 }
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
