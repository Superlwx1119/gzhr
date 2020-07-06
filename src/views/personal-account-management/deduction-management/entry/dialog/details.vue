<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
  >
    <div class="box">
      <box-title title-name="个人账户补注扣减信息修改" />
      <from-item :items-datas="itemsDatas" :form-datas="queryForm" :is-grid="false" />
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveEvent">保存</el-button>
        <el-button type="primary" @click="closeDialog">取消</el-button>
      </span>
    </div>
  </form-dialog>
</template>
<script>
import BoxTitle from '@/views/components/PageLayers/box-title'
import FromItem from '@/views/components/PageLayers/form-items'

export default {
  components: {
    BoxTitle,
    FromItem
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
        { label: '姓名', prop: 'xxx', type: 'input', input: 'd', disabled: true },
        { label: '证件号码', prop: 'xxx', type: 'input', input: 'd', disabled: true },
        { label: '联系人手机', prop: 'xxx', type: 'input', input: 'd' },
        { label: '补注扣减类型', prop: 'xxx', type: 'input', input: 'd', disabled: true },
        { label: '开始结束年月', prop: 'xxx', type: 'dateRange', input: 'd' },
        { label: '扣减业务类型', prop: 'xxx', type: 'select', input: 'd' },
        { label: '人员类别', prop: 'xxx', type: 'select', input: 'd' },
        { label: '扣减金额', prop: 'xxx', type: 'input', input: 'd' },
        { label: '计算基数', prop: 'xxx', type: 'input', input: 'd' },
        { label: '扣减原因', prop: 'xxx', type: 'input', input: 'd', span: 24 }
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
.dialog-footer{
  float: right;
}
</style>
