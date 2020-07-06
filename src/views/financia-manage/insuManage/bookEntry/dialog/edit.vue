<!-- 新增 编辑 -->
<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
  >
    <div class="box" style="height: auto">
      <box-title title-name="查询条件" />
      <form-items :items-datas="itemsDatas" :form-datas="dataForm" :is-grid="false" />
    </div>
    <div class="box" style="height: auto">
      <box-title title-name="业务类别" />
      <form-items :items-datas="itemsDatas1" :form-datas="dataForm" :is-grid="false" />
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
        { label: '查询条件', prop: 'xxx', type: 'input', span: 8 },
        { label: '姓名', prop: 'xxx', type: 'input', span: 8 },
        { label: '查询条件', prop: 'xxx1', type: 'input', span: 8 },
        { label: '单位名称', prop: 'xxx1', type: 'input', span: 8 },
        { label: '单位编码', prop: 'xxx1', type: 'input', span: 8 },
        { label: '医疗机构查询条件', prop: 'xxx1', type: 'input', span: 8 },
        { label: '医疗机构编码', prop: 'xxx1', type: 'input', span: 8 },
        { label: '医疗机构名称', prop: 'xxx1', type: 'input', span: 8 },
        { label: '名称', prop: 'xxx1', type: 'input', span: 8 },
        { label: '险种', prop: 'xxx1', type: 'input', span: 8 },
        { label: '人员类别', prop: 'xxx1', type: 'input', span: 8 },
        { label: '缴费原因', prop: 'xxx1', type: 'input', span: 24 }
      ],
      itemsDatas1: [
        { label: '个人账户注资金', prop: 'xxx', type: 'input', span: 8 },
        { label: '异地包干金额', prop: 'xxx', type: 'input', span: 8 },
        { label: '统筹基金金额', prop: 'xxx1', type: 'input', span: 8 },
        { label: '统筹基金金额', prop: 'xxx1', type: 'select', span: 8 },
        { label: '统筹基金金额', prop: 'xxx1', type: 'input', span: 8 },
        { label: '统筹基金金额', prop: 'xxx1', type: 'input', span: 8 },
        { label: '统筹基金金额', prop: 'xxx1', type: 'input', span: 8 },
        { label: '重大疾病金额', prop: 'xxx1', type: 'input', span: 8 },
        { label: '代垫工伤医疗费', prop: 'xxx1', type: 'input', span: 8 },
        { label: '代垫生育医疗费金额', prop: 'xxx1', type: 'input', span: 8 },
        { label: '其他待遇内容', prop: 'xxx1', type: 'input', span: 8 },
        { label: '总额 ', prop: 'xxx1', type: 'input', span: 8 },
        { label: '经办部门', prop: 'xxx1', type: 'input', span: 8 },
        { label: '经办人', prop: 'xxx1', type: 'input', span: 8 },
        { label: '复核人', prop: 'xxx1', type: 'input', span: 8 },
        { label: '登记台账时间', prop: 'xxx1', type: 'input', span: 8 },
        { label: '缴交期限(天数)', prop: 'xxx1', type: 'input', span: 8 },
        { label: '缴交时间', prop: 'xxx1', type: 'input', span: 8 },
        { label: '联系人', prop: 'xxx1', type: 'input', span: 8 },
        { label: '联系电话', prop: 'xxx1', type: 'input', span: 8 },
        { label: '地址', prop: 'xxx1', type: 'input', span: 8 },
        { label: '邮政编码', prop: 'xxx1', type: 'input', span: 8 },
        { label: '追缴依据', prop: 'xxx1', type: 'input', span: 16 },
        { label: '备注', prop: 'xxx1', type: 'input', span: 24 }
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
