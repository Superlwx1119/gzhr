<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
  >
    <div class="box">
      <div class="box-body">
        <FormItem :items-datas="itemsDatas" :form-datas="queryForm" :is-grid="false" />
      </div>
      <el-col :span="24">
        <el-button type="primary" style="float: right" @click="closeDialog">取消</el-button>
      </el-col>
    </div>
  </form-dialog>
</template>
<script>
import FormItem from '@/views/components/PageLayers/form-items'

export default {
  components: {
    FormItem
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
        { label: '个账收入明', prop: 'xxx', type: 'input', disabled: true },
        { label: '交换数据', prop: 'xxx', type: 'input', disabled: true },
        { label: '账户收支', prop: 'xxx', type: 'input', disabled: true },
        { label: '姓名', prop: 'xxx', type: 'input', disabled: true },
        { label: '证件号码', prop: 'xxx', type: 'input', disabled: true },
        { label: '费款所属期 ', prop: 'xxx', type: 'input', disabled: true },
        { label: '对应费款所', prop: 'xxx', type: 'input', disabled: true },
        { label: '核查项目', prop: 'xxx', type: 'input', disabled: true, span: 24 },
        { label: '数据状态', prop: 'xxx', type: 'input', disabled: true, span: 24 },
        { label: '门诊统筹基金', prop: 'xxx', type: 'input', disabled: true },
        { label: '总金额（元', prop: 'xxx', type: 'input', disabled: true },
        { label: '修改后总金额', prop: 'xxx', type: 'input', disabled: true },
        { label: '单位划入个', prop: 'xxx', type: 'input', disabled: true },
        { label: '个人划入个账金额', prop: 'xxx', type: 'input', disabled: true },
        { label: '姓人员缴费基数名', prop: 'xxx', type: 'input', disabled: true },
        { label: '参保身份', prop: 'xxx', type: 'input', disabled: true },
        { label: '修改单位划入个账金额', prop: 'xxx', type: 'input' },
        { label: '修改后个人划入金额（元）', prop: 'xxx', type: 'input' },
        { label: '修改后人员缴费基数', prop: 'xxx', type: 'input' },
        { label: '修改后参保身份', prop: 'xxx', type: 'select' },
        { label: '修改后业务状态', prop: 'xxx', type: 'select' }
      ],
      queryForm: {
        xxx: ''
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
