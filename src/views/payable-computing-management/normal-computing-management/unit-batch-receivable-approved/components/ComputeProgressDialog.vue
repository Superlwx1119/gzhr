<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
  >
    <div class="box" style="height:auto;">
      <div class="box-header handle">
        <span class="box-title">计算进度信息列表</span>
        <div class="box-tools">
          <el-button type="primary" @click="refreshProgress">刷新进度</el-button>
        </div>
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
      default: '单位批量应收核定计算进度详情'
    }
  },
  data() {
    return {
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: 'dwName', label: '单位名称', align: 'center' },
        { prop: 'xzType', label: '险种类型', align: 'center' },
        { prop: 'jskssj', label: '计算开始时间', align: 'center' },
        { prop: 'jsjssj', label: '计算结束时间', align: 'center' },
        { prop: 'jszt', label: '计算状态', align: 'center' },
        { prop: 'memp', label: '备注', align: 'center' }
      ],
      multipleSelection: [],
      tableData: [
        {
          dwName: '创智和宇',
          xzType: '基本医疗保险',
          jskssj: '2020-04-29 12:30:10',
          jsjssj: '2020-04-29 12:30:11',
          jszt: '已计算',
          memp: 'XXXXXXXX'
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
    },
    refreshProgress() {
      this.$msgSuccess('刷新完成！')
    }
  }
}
</script>

<style lang="scss">

</style>
