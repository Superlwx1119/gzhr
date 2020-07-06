<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
  >
    <div class="box">
      <table-items :item-datas="itemsDatas" :form-datas="formsDatas" />

      <box-title title-name="个人账户正常注资信息" />
      <my-table-view :data="tableData" :columns="columns" />
      <Pagination />
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="closeDialog">关闭</el-button>
      </span>
    </div>
  </form-dialog>
</template>
<script>
import TableItems from '@/views/components/PageLayers/table-items'
import BoxTitle from '@/views/components/PageLayers/box-title'

export default {
  components: {
    TableItems,
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
        [
          { label: '姓名', prop: 'xxx' },
          { label: '证件号码', prop: 'xxx' },
          { label: '联系人手机', prop: 'xxx' }
        ],
        [
          { label: '补注扣减类型', prop: 'xxx' },
          { label: '开始年月', prop: 'xxx' },
          { label: '结束年月', prop: 'xxx' }
        ],
        [
          { label: '扣减业务类型', prop: 'xxx' },
          { label: '人员类别', prop: 'xxx' },
          { label: '扣减金额', prop: 'xxx' }
        ],
        [
          { label: '计算基数', prop: 'xxx' },
          { label: '扣减原因', prop: 'xxx', colspan: 4 }
        ]
      ],
      formsDatas: {
        xxx: 'xxx',
        xxx1: ''
      },
      tableData: [
        { name: 'xxx', code: 'xxx', nameCode: 'xxx' },
        { name: 'xxx', code: 'xxx', nameCode: 'xxx' }
      ],
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: 'nameCode', label: '姓名', align: 'center' },
        { prop: 'nameCode', label: '证件号码', align: 'center' },
        { prop: 'code', label: '单位名称', align: 'center' },
        { prop: 'nameCode', label: '账户收支类型', align: 'center' },
        { prop: 'nameCode', label: '费款所属期', align: 'center' },
        { prop: 'code', label: '对应费款所属期', align: 'center' },
        { prop: 'code', label: '注资业务状态', align: 'center' },
        { prop: 'code', label: '总金额（元)', align: 'center' },
        { prop: 'code', label: '单位划入个账金额（元）', align: 'center' },
        { prop: 'code', label: '个人划入个账金额（元）', align: 'center' },
        { prop: 'code', label: '实划金额（元', align: 'center' },
        { prop: 'code', label: '划缴日期', align: 'center' },
        { prop: 'code', label: '参保身份', align: 'center' },
        { prop: 'code', label: '历史批号', align: 'center' },
        { prop: 'code', label: '备注', align: 'center' },
        { type: 'operation', label: '操作', fixed: 'right', width: '200px' }
      ]
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
.dialog-footer {
  float: right;
}
</style>
