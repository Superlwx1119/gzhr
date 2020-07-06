<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
  >
    <div class="box" style="height:auto;">
      <div class="box-header">
        <span class="box-title">缴费情况列表</span>
        <div class="box-tools" />
      </div>
      <div class="box-body">
        <my-table-view
          :data="tableData"
          :columns="columns"
          :multiple-selection.sync="multipleSelection"
        />
      </div>
      <Pagination />
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
      default: '缴费情况'
    }
  },
  data() {
    return {
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: 'name', label: '姓名', align: 'center' },
        { prop: 'sfz', label: '身份证', align: 'center' },
        { prop: 'xzType', label: '险种类型', align: 'center' },
        { prop: 'jsqj', label: '计算期间', align: 'center' },
        { prop: 'ssqj', label: '所属期间', align: 'center' },
        { prop: 'yjje', label: '应缴金额', align: 'center' },
        { prop: 'jkqk', label: '缴款情况', align: 'center' }
      ],
      multipleSelection: [],
      tableData: [
        {
          name: '陈某某',
          sfz: '632801YYYYMMDD0515',
          xzType: '基本医疗保险',
          jsqj: '201907',
          ssqj: '201907',
          yjje: '3000.00',
          jkqk: '已缴'
        }
      ]
    }
  },
  methods: {
    closeDialog() {
      this.$emit('closeAll', false)
    },
    saveEvent() {
      this.$msgSuccess('保存成功')
      this.$emit('closeAll', false)
    },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>

<style lang="scss">

</style>
