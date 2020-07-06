<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
  >
    <div class="box">
      <div class="box-body">
        <my-table-view
          v-loading="loading"
          :data="tableData"
          :columns="columns"
          :multiple-selection.sync="multipleSelection"
        />
      </div>
      <Pagination />
      <!-- <el-col :span="24">
        <el-button type="primary" style="float: right" @click="closeDialog">取消</el-button>
      </el-col>-->
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
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: 'nameCode', label: '批次号', align: 'center' },
        { prop: 'nameCode', label: '征缴期间', align: 'center' },
        { prop: 'code', label: '到账时间', align: 'center' },
        { prop: 'nameCode', label: '应到金额（元）', align: 'center' },
        { prop: 'nameCode', label: '实到金额（元）', minWidth: '200px', align: 'center' },
        { prop: 'code', label: '回盘文件', align: 'center' },
        { prop: 'code', label: '医保区划', align: 'center' }
      ],
      multipleSelection: [],
      tableData: [
        { name: 'xxx', code: 'xxx', nameCode: 'xxx' },
        { name: 'xxx', code: 'xxx', nameCode: 'xxx' }
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
.pf-table .el-table {
  min-height: 400px !important;
}
</style>
